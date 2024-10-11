// const puppeteer = require('puppeteer'); 

// async function webScraper() 
// { 
//     const browser = await puppeteer.launch({})    
//     const page = await browser.newPage()    
    
//     await page.goto('https://www.instagram.com/shashank_udakhe/?hl=en')    
    
//     let element = await page.waitFor("h1")
//     // let element = await page.waitForSelector("h1");
    
//     let text = await page.evaluate(element => element.textContent, element)    
    
//     console.log(text)    
    
//     browser.close() 
// }; 

// webScraper();

// ---------------------------------------------------------


// const axios = require('axios');
// const cheerio = require('cheerio');
 
// const url = 'https://www.instagram.com/shashank_udakhe/?hl=en'; // Replace with the website you want to scrape
 
// axios.get(url)
//   .then(response => {
//     const html = response.data;
//     const $ = cheerio.load(html);
 
//     // console.log(html);

//     // Extract follower count
//     const followerCount = $('meta[content*="Followers"]')[0].next.attribs.content.split(',')

//     // Extract CONTACT information
//     // const contactInfo = $('meta[content*="CONTACT"]').text().split(':')[1].trim();  // Extract text after colon

//     console.log(followerCount);
//     // console.log('CONTACT:', contactInfo);
//   })
//   .catch(error => {
//     console.error('Error fetching the URL:', error);
//   });

// ---------------------------------------------------------


// const puppeteer = require('puppeteer');

// (async function main() {
//   try {
//     const browser = await puppeteer.launch();
//     const [page] = await browser.pages();

//     await page.goto('https://www.instagram.com/shashank_udakhe/?hl=en', { waitUntil: 'networkidle0' });
//     const data = await page.evaluate(() => document.querySelector('*').outerHTML);

//     console.log(data);
//     // const elements = await page.$$('x5n08af');

//     // console.log(elements);

//     await browser.close();
//   } catch (err) {
//     console.error(err);
//   }
// })();



const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto('https://www.instagram.com/shashank_udakhe/?hl=en', { waitUntil: 'networkidle0' });

    const data = await page.evaluate(() => 
    { 
        const element = document.querySelectorAll('*');

        for (ele of element)
        {
            const text = ele.querySelector('.x78zum5');

            console.log(text);
        }
    });

    console.log(data);

    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();


// const puppeteer = require('puppeteer');

// async function getFollowerCount() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   try {
//     await page.goto('https://www.instagram.com/shashank_udakhe/?hl=en', { waitUntil: 'networkidle0' });

//     // Use Puppeteer's evaluate to extract data within the browser context
//     const followerCount = await page.evaluate(() => {
//       // Improved selector to target the element with followers count
//       const followerButton = document.querySelector('xl565be x1m39q7l x1uw6ca5 x2pgyrj');

//       // Handle potential cases where the element might not be present
//       if (followerButton) {
//         return followerButton.textContent.trim(); // Extract and clean the text content
//       } else {
//         return 'Follower count not found'; // Inform if not found
//       }
//     });

//     console.log('Follower count:', followerCount);
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     await browser.close();
//   }
// }

// getFollowerCount();