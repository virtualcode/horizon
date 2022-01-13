import Main from './views/main.js'

export async function handler (/*req: object*/) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: Main({
      /**
       * Basic bio
       */
      fullname: 'Michael Perry', // ←  Start by adding your name!
      title: 'Beyond The Horizon',
      occupation: 'Web Developer & Photographer',
      location: 'Hampton, VA',
      bio: 'Specializing in serverless web developement using AWS.<br><br>--NO SERVERS ALLOWED--',

      /**
       * Contact / social
       * - Comment out any item below to remove it from your page
       */
      email: 'mperry777@gmail.com',
      twitter: 'virtling',
      linkedin: 'virtualdevops',

      /**
       * Layout
       */ 
      photographer: 'Michael Perry',
      service: 'PhotoPrism',
      /* credit: 'https://photos.bthviews.com/', */
      image: '_static/background.jpg'
    })
  }
}
