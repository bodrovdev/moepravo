// import axios from "axios";

// window.addEventListener('load', () => {

//   if (window.location.href.indexOf('page') !== -1 && window.location.href.split('page/')[1].split('/')[0] === document.querySelector('.container-class').dataset.max) {
//     document.querySelector('.button-class').parentNode.removeChild(document.querySelector('.button-class'));
//   }

//   const ajaxLoadMore = () => {
//     const loadButton = document.querySelector('.button-class');

//     if (loadButton !== undefined && loadButton !== null) {
//       let getUrl = window.location;
//       let baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname;

//       loadButton.addEventListener('click', () => {
//         let currentPage = document.querySelector('.container-class').dataset.page;
//         let max_pages = document.querySelector('.container-class').dataset.max;

//         let params = new URLSearchParams();
//         params.append('action', 'load_more_posts');
//         params.append('current_page', currentPage);
//         params.append('max_pages', max_pages);

//         axios.post('/time_development/wp-admin/admin-ajax.php', params)
//           .then(res => {
//             let posts_list = document.querySelector('.container-class');

//             posts_list.innerHTML += res.data.data;

//             window.history.replaceState('', '', baseUrl + 'page/' + (parseInt(document.querySelector('.container-class').dataset.page) + 1) + '/');

//             document.querySelector('.container-class').dataset.page++;

//             if (document.querySelector('.container-class').dataset.page == document.querySelector('.container-class').dataset.max) {
//               loadButton.parentNode.removeChild(loadButton);
//               // document.getElementById('circle_follow').classList.remove('circle--active-yellow');
//               // document.getElementById('circle_follow').classList.remove('circle--active');
//             }
//           });
//       });
//     }
//   }
//   ajaxLoadMore();
// })