// import axios from "axios";

// window.addEventListener('load', () => {

//   if (document.querySelector('.archive__showmore') === null) {
//     return;
//   }
//   else {
//     if ((window.location.href.indexOf('page') !== -1 && window.location.href.split('page/')[1].split('/')[0] === document.querySelector('.archive__list').dataset.max) || document.querySelector('.archive__list').dataset.page >= document.querySelector('.archive__list').dataset.max) {
//       document.querySelector('.archive__showmore').parentNode.removeChild(document.querySelector('.archive__showmore'));
//     }

//     const ajaxLoadMore = () => {
//       const loadButton = document.querySelector('.archive__showmore');

//       if (loadButton !== undefined && loadButton !== null) {
//         let getUrl = window.location;
//         let baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname;

//         loadButton.addEventListener('click', () => {
//           let currentPage = document.querySelector('.archive__list').dataset.page;
//           let max_pages = document.querySelector('.archive__list').dataset.max;

//           let params = new URLSearchParams();
//           params.append('action', 'load_more_posts');
//           params.append('current_page', currentPage);
//           params.append('max_pages', max_pages);

//           axios.post('https://ce14048.tw1.ru/moepravo/wp-admin/admin-ajax.php', params)
//             .then(res => {
//               let posts_list = document.querySelector('.archive__list');

//               posts_list.innerHTML += res.data.data;

//               window.history.replaceState('', '', baseUrl + 'page/' + (parseInt(document.querySelector('.archive__list').dataset.page) + 1) + '/');

//               document.querySelector('.archive__list').dataset.page++;

//               if (document.querySelector('.archive__list').dataset.page == document.querySelector('.archive__list').dataset.max) {
//                 loadButton.parentNode.removeChild(loadButton);
//               }
//             });
//         });
//       }
//     }
//     ajaxLoadMore();
//   }
// })