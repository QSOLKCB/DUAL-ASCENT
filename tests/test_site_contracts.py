"""Static, dependency-free contracts for the DUAL-ASCENT learning site.

These checks are deliberately not a browser integration test or human-learning
assessment. They guard offline-first assets, accessible structure, and research
status wording without introducing npm or external test dependencies.
"""
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / "index.html").read_text(encoding="utf-8")
JS = (ROOT / "app.js").read_text(encoding="utf-8")
CSS = (ROOT / "styles.css").read_text(encoding="utf-8")


class Elements(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.assets = []
        self.external_anchors = []
        self.heading_count = 0
        self.errors = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if "id" in attributes:
            self.ids.append(attributes["id"])
        if tag == "h1":
            self.heading_count += 1
        if tag in {"script", "link", "img"}:
            field = "src" if tag in {"script", "img"} else "href"
            if attributes.get(field):
                self.assets.append(attributes[field])
        if tag == "a" and attributes.get("target") == "_blank":
            self.external_anchors.append(attributes)
        if tag == "form" and attributes.get("action"):
            self.errors.append("Unexpected form submission endpoint")


class SiteContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.parser = Elements()
        cls.parser.feed(HTML)
        cls.parser.close()

    def test_local_assets_exist(self):
        self.assertEqual(sorted(self.parser.assets), ["./app.js", "./styles.css"])
        for asset in self.parser.assets:
            self.assertTrue((ROOT / asset).is_file(), asset)
        self.assertFalse(self.parser.errors)

    def test_unique_ids_and_script_references(self):
        ids = self.parser.ids
        self.assertEqual(len(ids), len(set(ids)), "Duplicate HTML id")
        referenced = set(re.findall(r'\bel\("([^"]+)"\)', JS))
        self.assertLessEqual(referenced, set(ids))
        self.assertGreaterEqual(len(referenced), 25)

    def test_hero_and_research_boundaries(self):
        self.assertEqual(self.parser.heading_count, 1)
        self.assertIn("The AI Doesn't Unlock Until Level 4.", HTML)
        self.assertIn("REVISE / NO BUILD AUTHORIZED", HTML)
        self.assertIn("GAME XP", HTML)
        self.assertIn("self-reported", HTML.lower())
        self.assertIn("ISSUE #7", HTML)
        self.assertIn("EXP-003A", HTML)
        self.assertIn("ORCHESTRATOR PARADOX", HTML)

    def test_five_challenges_and_local_unlock_contract(self):
        for n in range(1, 6):
            self.assertIn("HSC-%03d" % n, JS)
        self.assertIn("slice(0, index).every", JS)
        self.assertIn("unlocked(3)", JS)
        self.assertIn("XP_PER_LEVEL", JS)
        self.assertIn("localStorage", JS)
        self.assertIn("cleanState", JS)
        self.assertIn("completed = true", JS)
        self.assertIn("NO GENERATIVE AI", JS)

    def test_no_auto_network_or_remote_executable_assets(self):
        for fragment in ("fetch(", "XMLHttpRequest", "WebSocket(",
                         "navigator.sendBeacon", ".innerHTML", "eval("):
            self.assertNotIn(fragment, JS)
        self.assertFalse(any(asset.startswith(("http:", "https:", "//"))
                             for asset in self.parser.assets))
        self.assertTrue(self.parser.external_anchors)
        for attrs in self.parser.external_anchors:
            self.assertIn("noopener", attrs.get("rel", ""))
            self.assertIn("noreferrer", attrs.get("rel", ""))

    def test_css_mobile_and_accessibility(self):
        self.assertIn("@media(max-width:520px)", CSS.replace(" ", ""))
        self.assertIn("prefers-reduced-motion", CSS)
        self.assertIn(":focus-visible", CSS)
        self.assertIn('.skip-link', CSS)
        self.assertIn('aria-live="polite"', HTML)
        self.assertIn('aria-valuenow="0"', HTML)


if __name__ == "__main__":
    unittest.main()
