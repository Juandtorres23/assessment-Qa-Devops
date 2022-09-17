
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    await driver.sleep(3000);
    expect(displayed).toBe(true);
});

test("Draw button displays choices", async () => {
    const drawButton = driver.findElement(By.id("draw"));
    await drawButton.click();
    await driver.sleep(2000);
    const choices = driver.findElement(By.id("choices"))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
});

test("removing bot returns to choices", async () => {
   const drawButton = driver.findElement(By.id("draw"));
   await drawButton.click();
   await driver.sleep(2000);
   const addToDuo = driver.findElement(By.xpath('/html/body/section[1]/div/div[1]/button'));
   await addToDuo.click();
   await driver.sleep(2000);
   const removeButton = driver.findElement(By.xpath('/html/body/section[2]/section[1]/div/div/button'))
   await removeButton.click();
   await driver.sleep(2000);
});