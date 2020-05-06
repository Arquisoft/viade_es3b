const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./e2e/features/watchRoute.feature');

const puppeteer = require('puppeteer');
let browser = null;
let page = null;

defineFeature(feature, test => {

    beforeEach(async () => {
        jest.setTimeout(1200000);
    });

    test('Trying to see any route', ({given, when, and, then}) => {

        given('I log in in the app', async () => {
            browser = await puppeteer.launch({
                headless: false
            });

            page = await browser.newPage()
            await page.goto("http://localhost:3000/#/login", {
                waitUntil: 'networkidle2'
            });
            await page.waitForSelector(".sc-htoDjs.dopcfv");
            await page.type(".sc-htoDjs.dopcfv", "https://viadeEs3b.solid.community/profile/card#me");

            await page.evaluate(() => {
                let btns = [...document.querySelectorAll("button")];
                btns.forEach(function (btn) {
                    if (btn.innerText == "Iniciar sesión") {
                        btn.click();
                    }

                });
            });

            await page.waitForNavigation({
                waitUntil: 'networkidle2'
            });
            await page.waitForSelector("[id='username']", {visible: true});
            await page.type("[id='username']", "viadeEs3b");

            await page.waitFor(500);
            await page.waitForSelector("[id='password']", {visible: true});
            await page.type("[id='password']", "ES3B_viade", {visible: true});

            await page.waitFor(500);

            await page.evaluate(() => {
                let btns = [...document.querySelector(".form-horizontal.login-up-form").querySelectorAll("button")];
                btns.forEach(function (btn) {
                    if (btn.innerText == "Log In")
                        btn.click();
                });
            });
            await page.waitForNavigation({
                waitUntil: 'networkidle2'
            });

            expect(page.url()).toBe("http://localhost:3000/viade_es3b/#/welcome");
            

        });

        when('I go to map page', async () => {
            await page.waitFor(1000);

            await page.goto("http://localhost:3000/viade_es3b/#/map", {
                waitUntil: 'networkidle2'
            });

            expect(page.url()).toBe("http://localhost:3000/viade_es3b/#/map")

            

            

        });

       

        then('I can see the route', async () => {
            await page.waitFor(8000);
            await page.evaluate(() => {
                let b = [...document.querySelectorAll("button")];
                b.forEach(function (b) {
                    if (b.innerText == "map.private") {
                        b.click();
                    }

                });
            });
            await page.waitFor(10000);
            await page.evaluate(() => {
                let b = [...document.querySelectorAll("button")];
                b.forEach(function (b) {
                    if (b.innerText == "Ruta por Nava") {
                        b.click();
                    }

                });
            });


            expect(page).toMatchElement('h1', { text: 'Ruta por Nava' })

            

        });
    });
});