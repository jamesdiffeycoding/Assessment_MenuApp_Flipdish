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
    page.getByRole("heading", { name: "Mains", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Desserts", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Drinks", exact: true })
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
    page.getByRole("heading", { name: "Pizza", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Fruit Salad", exact: true })
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
  await expect(
    page.getByRole("heading", { name: "Beer | Corona 330ml", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Chris's test item | bbq", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Chris's test item | blue cheese",
      exact: true,
    })
  ).toBeVisible();
});

test("does not have incorrect option sets", async ({ page }) => {
  await page.goto(localHost);
  // Chips | Onions is in an option set where the isMasterFlagSet is false
  await expect(
    page.getByRole("heading", {
      name: "Chips | Onions",
      exact: true,
    })
  ).not.toBeVisible();
});

test("has correct prices", async ({ page }) => {
  await page.goto(localHost);
  const pizzaCard = await page.locator("section").filter({ hasText: "Pizza" });
  await expect(pizzaCard.locator("p.text-sm")).toHaveText("£10.00");
  const chipsSmallOption = await page
    .locator("section")
    .filter({ hasText: "Chips | Small" });
  await expect(chipsSmallOption.locator("p.text-sm")).toHaveText("£3.00");
});
