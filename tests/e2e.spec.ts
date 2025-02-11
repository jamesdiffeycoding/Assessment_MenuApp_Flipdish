import { test, expect } from "@playwright/test";

const localHost = "http://localhost:3000";

test("has images with alt-attributes", async ({ page }) => {
  await page.goto(localHost);
  await expect(page.getByAltText("Image of Pizza")).toBeVisible();
  await expect(page.getByAltText("Image of Chips | Small")).toBeVisible();
});

test("has sections", async ({ page }) => {
  await page.goto(localHost);
  await expect(
    page.getByRole("heading", { name: "Demo", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Test new section", exact: true })
  ).toBeVisible();
});

test("has items", async ({ page }) => {
  await page.goto(localHost);
  await expect(
    page.getByRole("heading", { name: "Salad", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Soft Drinks", exact: true })
  ).toBeVisible();
});

test("has correct option sets", async ({ page }) => {
  await page.goto(localHost);
  await expect(
    page.getByRole("heading", { name: "Chips | Small", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Chips | Large", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Beer | Heineken 330ml", exact: true })
  ).toBeVisible();
});

test("does NOT have incorrect option sets", async ({ page }) => {
  await page.goto(localHost);
  // Chips | Onions is in an option set where the isMasterFlagSet is false
  await expect(
    page.getByRole("heading", {
      name: "Chips | Onions",
      exact: true,
    })
  ).not.toBeVisible();
});

test("has correct prices for both items and options in Intl format", async ({
  page,
}) => {
  await page.goto(localHost);
  const pizzaCard = page.locator("section").filter({ hasText: "Pizza" });
  await expect(pizzaCard.locator("p.text-sm")).toHaveText("£10.00");
  const chipsSmallOption = page
    .locator("section")
    .filter({ hasText: "Chips | Small" });
  await expect(chipsSmallOption.locator("p.text-sm")).toHaveText("£3.00");
});
