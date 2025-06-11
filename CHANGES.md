# Changes

| status    | problem                                                                 |                                 |
| --------- | ----------------------------------------------------------------------- | ------------------------------- |
| chore     | adding human friendly comment to imports                                |                                 |
| chore     | look for unused imports and remove                                      |                                 |
| **FIXED** | *******************************ENDS************************************ | --------------------------      |
| Bug       | nestablelist nested sortable example bugged                             |                                 |
| bug       | custom layout not working through query params                          |                                 |
| chore     | go and format all files                                                 |                                 |
| Bug       | forms/range range add css                                               | imported lib css in app.tsx     |
| Bug       | Data Tables, Sorting icons are not being shown                          |                                 |
| chore     | Format all pages with indent of 2 spaces + remove spaces                |                                 |
| chore     | proper array.map                                                        |                                 |
| chore     | remove unwanted comments {/*                                            |                                 |
| chore     | removing data-fc- and fc- from all tsx files and replacing with raect   |                                 |
| chore     | check for .html links                                                   |                                 |
| chore     | <a/> to <Link/> tag                                                     |                                 |
| Bug       | Validation bugs not showing in form/validation                          |                                 |
| Bug       | project/create with react-dropzone                                      |                                 |
| Bug       | remaining to convert to formInput in formLayout.tsx                     |                                 |
| Bug       | FileUploader Make uploaded file UI                                      |                                 |
| Bug       | /extended/nestable-list cloning, handle with icon                       |                                 |
| Bug       | /extended/lightbox self hosted video not working                        |                                 |
| Bug BIG   | tourpage, react-joyride was not working, added global in vite.config.ts |                                 |
| Bug       | extended/swiper css not working                                         | added parent class in scss      |
| Bug       | ui/offcanvas not working                                                |                                 |
| Bug       | faqs page text overflowing                                              | removed 2 words                 |
| Bug       | Embed Video video unavailable                                           | removed unwanted props          |
| Bug       | tables/dataTables Fixed Header Not Working                              | added overflow-y-auto           |
| bug       | top bar search modal not working when jsx is in topbarsearch file       | updated modalLayout             |
| bug       | file manager the left panel in mobile responsive not opening off canvas | added offcanvasLayout           |
| Bug       | Leftsidebar not opening when in mobile                                  | corrected sidenav-enable        |
| bug       | calendar css not working in borders and buttons                         | removed @fullcalendar/bootstrap |
| Bug       | forms/pickers color picker not selecting color on picking               | added onChangeComplete          |
| Bug       | forms/pickers default date                                              | value={new Date()} added        |
| chore     | FormInput in kanban new task modal                                      |                                 |
| Bug       | Pickers Flatpicker background color not proper                          |                                 |
| Ignored   | /ui/tooltips large tooltip is translucent                               |                                 |
| Bug       | /ui/collapse Icon not rotating on open                                  |                                 |
| Bug       | /ui/tab Vertical Tab not working properly                               |                                 |
| Bug       | leftsidebar condensing from topbar without animation                    |                                 |
| Bug       | topbar toggle not working                                               |                                 |
| Bug       | Logout not working                                                      |                                 |
| Bug       | Scroll to top not working on scroll up                                  |                                 |
| chore     | removing icon key from routes/index.tsx                                 |                                 |
| Bug       | tables/dataTables Loading state table not working                       |                                 |

## For Nijunkbhai
| path                    | problem                                          |
| ----------------------- | ------------------------------------------------ |
| datatables              | improper layout after importing CSS              |
| /ui/tables/data-tables  | css overlapping                                  |
| ------**FIXED**-------- | ************************ENDS******************** |
| /apps/calendar          | grid css is not present                          |
| /ui/forms/form-elements | dark checkboxes not working                      |
| Bug                     | Left side bar in small not working with children |
| filemanager             | leftpanel modal from left side                   |
| ui/offcanvas            | positioned offcanvas                             |
| FileUploader            | Make uploaded file UI                            |

## For Ajay
| path                    | problem                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------- |
| /ui/forms/validation    | use react-hook-form   //error not show                                                  |
| /extended/nestable-list | It is remaining                                                                         |
| **FIXED**               | *******************************ENDS************************                             |
| Chore                   | Add PopoverLayout component to use dropdown in all pages                                |
| /ui/forms/range         | colorpicker not working use this https://www.npmjs.com/package/react-range-slider-input |
| Bug                     | Form Validation page is remaining                                                       |
| Bug                     | remaining to convert to formInput in formLayout.tsx                                     |
| /extended/ratings       | do random number between                                                                |
| /ui/forms/form-layout   | use form input components                                                               |
| Offcanvas               | use HeadlessUI component                                                                |
| Modals                  | use HeadlessUI component                                                                |
| formelements            | input type select bug                                                                   |
| ui/popovers             | use tippyjs/react instead of frostUI                                                    |
| TourPage                | Page not loading                                                                        |
| forms/pickers           | colorpicker-responsive not working                                                      |
| pages/faqs              | finish up /pages/faqs collapse                                                          |
| ui/accordions           | Replace fc- accordions with FrostUI Collapse                                            |
| ui/collapse             | make all collapses work                                                                 |
| /ui/dismissible         | make this work using handleDismiss function from components                             |
| /ui/dropdowns           | make all dropdown work                                                                  |
| /ui/tooltips            | use floating-ui/react                                                                   |
| /ui/tab                 | use headless ui tabs                                                                    |

## For Ishan

| path         | problem                                     |
| ------------ | ------------------------------------------- |
| ****FIXED*** | *********************ENDS****************** |
| FormLayout   | not responsive                              |
| forms/range  | Soft limit range add css, numbers going out |

## Ajay's bugs

| path                  | problem                                           |
| --------------------- | ------------------------------------------------- |
| ----fixed------------ | ------fixed-------------------------------------- |
| lightbox              | image with description not working                |
| lightbox              | iframe not working                                |
| lightbox              | style issues                                      |
| forms/range           | creating a toggle css not working                 |
| filemanager/folders   | icon not working                                  |
| forms/range           | lock slider not working                           |
| filemanager/recent    | icon not working                                  |
| filemanager/leftpanel | icon not working                                  |
| forms/select          | input box bug                                     |
| tables/dataTables     | hidden not working                                |
| /pages/timeline       | make timeline data                                |
| ui/dropdowns          | variant name issue                                |

{https://refreshless.com/nouislider/examples/#section-toggle } take css from this site and attach it with forms/range

## Pages status

| path                    | status    |
| ----------------------- | --------- |
| /dashboard              | finished  |
| /apps/calendar          | finished  |
| /apps/tickets           | finished  |
| /apps/file-manager      | finished  |
| /apps/kanban            | finished  |
| /apps/project/list      | finished  |
| /apps/project/detail    | finished  |
| /apps/project/create    | finished  |
| /auth/login             | finished  |
| /auth/register          | finished  |
| /auth/recover-password  | finished  |
| /auth/lock-screen       | finished  |
| /pages/starter          | finished  |
| /pages/timeline         | finished  |
| /pages/invoice          | finished  |
| /pages/gallery          | finished  |
| /pages/faqs             | finished  |
| /pages/pricing          | finished  |
| /maintenance            | finished  |
| /coming-soon            | finished  |
| /error-404              | finished  |
| /error-404-alt          | finished  |
| /error-500              | finished  |
| /ui/accordions          | finished  |
| /ui/alerts              | finished  |
| /ui/avatars             | finished  |
| /ui/buttons             | finished  |
| /ui/badges              | finished  |
| /ui/breadcrumb          | finished  |
| /ui/cards               | finished  |
| /ui/collapse            | finished  |
| /ui/dismissible         | finished  |
| /ui/dropdowns           | finished  |
| /ui/progress            | finished  |
| /ui/skeleton            | finished  |
| /ui/spinners            | finished  |
| /ui/list-group          | finished  |
| /ui/ratio               | finished  |
| /ui/tab                 | finished  |
| /ui/modals              | finished  |
| /ui/offcanvas           | finished  |
| /ui/popovers            | finished  |
| /ui/tooltips            | finished  |
| /ui/typography          | finished  |
| /extended/swiper        | remaining |
| /extended/nestable-list | remaining |
| /extended/ratings       | remaining |
| /extended/animation     | finished  |
| /extended/player        | finished  |
| /extended/scrollbar     | finished  |
| /extended/sweet-alert   | finished  |
| /extended/tour          | remaining |
| /extended/tooltippy     | finished  |
| /extended/lightbox      | remaining |
| /ui/forms/form-elements | remaining |
| /ui/forms/select        | finished  |
| /ui/forms/range         | remaining |
| /ui/forms/pickers       | finished  |
| /ui/forms/masks         | finished  |
| /ui/forms/editor        | finished  |
| /ui/forms/file-uploads  | finished  |
| /ui/forms/validation    | remaining |
| /ui/forms/form-layout   | remaining |
| /ui/tables/basic-tables | finished  |
| /ui/tables/data-tables  | finished  |
| /ui/icons/mingcute      | finished  |
| /ui/icons/feather       | finished  |
| /ui/icons/material      | finished  |
| /ui/chart               | finished  |
| /ui/maps/vector-maps    | finished  |
| /ui/maps/google-maps    | finished  |
