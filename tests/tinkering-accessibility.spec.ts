import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const disableAnimations = `
  *, *::before, *::after {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
    animation-delay: 0s !important;
  }
`;

test.describe("/tinkering accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tinkering");
    await page.addStyleTag({ content: disableAnimations });
  });

  test("should have no color-contrast violations", async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(["color-contrast"])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("should have no WCAG 2.1 AA violations", async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
