const puppeteer = require('puppeteer');

async function getPic() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.eventbrite.com/create');

    //document.querySelector('#signin-email').keyboard.type('nishant.coolie@gmail.com', { delay: 100 });
    await page.type('#signin-email', 'nishant.coolie@gmail.com', { delay: 100 });
    await page.waitFor(1000);
    await page.click('#root > div > div.eds-structure__body > div > div > div > div.eds-fixed-bottom-bar-layout__content > div > main > div > div > div > form > div:nth-child(2) > button');
    await page.waitFor(1000);

    await page.type('#password', '*********', { delay: 100 });
    await page.click('#root > div > div.eds-structure__body > div > div > div > div.eds-fixed-bottom-bar-layout__content > div > main > div > div > div > div.eds-fx--fade-in.eds-fx--delay-2 > form > div.eds-fx--fade-in-down.eds-fx--delay-1 > button');
    await page.waitFor(5000);

    await page.type('#id_group-details-name', 'Buttsys Anger Management Classes', { delay: 100 });

    //await page.select('select#event_details_date > div > div.js-dtp-eventdatetimepair > div.js-dtp-datetimepairpicker.ui-date-time-pair-picker > div.js-dtp-startdatetimepicker.datetime_input.g-cell.l-mar-top-1.ui-date-time-picker > div > div.js-dtp-datepickerbackbone.ui-event-datetime > input.js-dtp-datepicker-input', '03/12/2018');
    //await page.type('#event_details_date > div > div.js-dtp-eventdatetimepair > div.js-dtp-datetimepairpicker.ui-date-time-pair-picker > div.js-dtp-startdatetimepicker.datetime_input.g-cell.l-mar-top-1.ui-date-time-picker > div > div.js-dtp-datepickerbackbone.ui-event-datetime > input.js-dtp-datepicker-input', '', { delay: 100 });
    //await page.type('#event_details_date > div > div.js-dtp-eventdatetimepair > div.js-dtp-datetimepairpicker.ui-date-time-pair-picker > div.js-dtp-startdatetimepicker.datetime_input.g-cell.l-mar-top-1.ui-date-time-picker > div > div.js-dtp-datepickerbackbone.ui-event-datetime > input.js-dtp-datepicker-input', '02/14/2018', { delay: 100 });
    //await page.type('#event_details_date > div > div.js-dtp-eventdatetimepair > div.js-dtp-datetimepairpicker.ui-date-time-pair-picker > div.js-dtp-startdatetimepicker.datetime_input.g-cell.l-mar-top-1.ui-date-time-picker > div > div.js-dtp-timepicker.js-timepicker.create_select_time_field.ui-event-datetime.timepicker > input', '', { delay: 100 });
    //await page.type('#event_details_date > div > div.js-dtp-eventdatetimepair > div.js-dtp-datetimepairpicker.ui-date-time-pair-picker > div.js-dtp-startdatetimepicker.datetime_input.g-cell.l-mar-top-1.ui-date-time-picker > div > div.js-dtp-timepicker.js-timepicker.create_select_time_field.ui-event-datetime.timepicker > input', '7:00pm', { delay: 100 });

    await page.click('#id_group-details-description_ifr');
    await page.type('#event_details_details > div.l-mar-top-1 > div > textarea', 'The sample description for Buttsys Anger Management Classes', { delay: 100 });

    await page.click('#create-ticket-free-button');
    await page.waitFor(3000);

    await page.type('#id_group-tickets-0-ticket_type', 'RSVP', { delay: 100 });
    await page.type('#id_group-tickets-0-quantity_total', '50', { delay: 100 });

    await page.click('#make-event-live-button-almost-done');
    await page.waitFor(15000);

    await browser.close();
}

getPic();