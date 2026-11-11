"""Static safety regression for the main-only GitHub Pages workflow.

This checks the committed YAML text, not GitHub's runtime parser or Pages
settings. The live deploy remains unverified until main is merged and runs.
"""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
PAGES = (ROOT / ".github/workflows/pages.yml").read_text(encoding="utf-8")


class PagesWorkflowTests(unittest.TestCase):
    def test_only_main_can_start_deployment(self):
        self.assertIn("  push:\n    branches: [main]\n", PAGES)
        self.assertIn("  workflow_dispatch:\n", PAGES)
        self.assertNotIn("  pull_request:\n", PAGES)
        guard = ("if: github.repository == 'QSOLKCB/DUAL-ASCENT' "
                 "&& github.ref == 'refs/heads/main'")
        self.assertEqual(PAGES.count(guard), 2)

    def test_release_requires_tests_and_artifact(self):
        self.assertIn("python -I -B -m unittest discover -s tests -v", PAGES)
        self.assertIn("cp -- index.html styles.css app.js _site/", PAGES)
        self.assertIn("path: _site", PAGES)
        self.assertIn("needs: build", PAGES)
        self.assertIn("cancel-in-progress: false", PAGES)

    def test_deploy_permissions_and_environment(self):
        self.assertIn("uses: actions/checkout@v5", PAGES)
        self.assertIn("uses: actions/setup-python@v6", PAGES)
        self.assertIn("uses: actions/configure-pages@v5", PAGES)
        self.assertIn("uses: actions/upload-pages-artifact@v4", PAGES)
        self.assertIn("uses: actions/deploy-pages@v4", PAGES)
        self.assertIn("pages: write", PAGES)
        self.assertIn("id-token: write", PAGES)
        self.assertIn("name: github-pages", PAGES)
        self.assertNotIn("npm ", PAGES)
        self.assertNotIn("git push", PAGES)


if __name__ == "__main__":
    unittest.main()
