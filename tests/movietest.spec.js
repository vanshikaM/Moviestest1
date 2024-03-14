const {test,expect} = require('@playwright/test');

test('Search Movie',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
    
    await page.getByPlaceholder('Search for your favorite movie').click();
    await page.getByPlaceholder('Search for your favorite movie').fill('Incep');
   
    
})

test('Add Movie',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
    await page.getByRole('button', { name: 'Add new movie' }).click();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('SpiderMan');
    await page.locator('#release').fill('2024-03-05');
    await page.getByRole('button', { name: 'Create Movie' }).click();
})

test('Delete Movie',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
    await page.locator('div').filter({ hasText: 'Question5Released: March 13,' }).getByRole('button').nth(1).click();
    
})

test('Add Reviews',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
    await page.getByRole('button', { name: 'Add new review' }).click();
    await page.locator('#movie').selectOption('cltpz376m0001l121kh0al0wr');
    await page.getByPlaceholder('Your name').click();
    await page.getByPlaceholder('Your name').fill('vanshika');
    await page.getByPlaceholder('Rating out of').click();
    await page.getByPlaceholder('Rating out of').fill('7');
    await page.getByPlaceholder('Review comments').click();
    await page.getByPlaceholder('Review comments').fill('nice');
    await page.getByRole('button', { name: 'Create Review' }).click();
    
})

test('Add Movie without date',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
    await page.getByRole('button', { name: 'Add new movie' }).click();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('SpiderMan3');
    await page.locator('#release').fill('');
    await page.getByRole('button', { name: 'Create Movie' }).click();
    
})

test('Add Review with some fields',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
    await page.getByRole('button', { name: 'Add new review' }).click();
    await page.locator('#movie').selectOption('cltpz376m0001l121kh0al0wr');
    
    await page.getByPlaceholder('Review comments').click();
    await page.getByPlaceholder('Review comments').fill('nice');
    await page.getByRole('button', { name: 'Create Review' }).click();
})
test('Delete Review',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
        await page.locator('a').filter({ hasText: 'PurvaReleased: March 14,' }).click();
        await page.getByRole('main').getByRole('button').nth(1).click();
})

test('Update Movie',async ({page})=>{
    await page.goto('https://movie-reviews-psi.vercel.app/');
    await page.locator('div').filter({ hasText: 'MarvelAvengersReleased: March' }).getByRole('button').first().click();
    await page.locator('#release').fill('2024-03-05');
    await page.getByRole('button', { name: 'Update Movie' }).click();
})
