const { sanitizeEntity } = require('strapi-utils');
const axios = require('axios');
const { convertRestQueryParams } = require('strapi-utils');
module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findReleases(ctx) {
    /*
    | Receive a query and and return related artists
    */
    const { query } = ctx.request.body
    console.log(query)

    let { data } = await axios
      .get(`https://api.discogs.com/database/search?q=${query?query:''}&per_page=10&country=brazil&token=XNpUINGKchTmtYBPPSVVULzcCAUjklDgTyzIqqZw`)
      .then(res => {return res})
      .catch(err => {return err});

    return data
  },

  async showArtist(ctx) {
    /*
    | Receive a query and and return related artists
    */
    const { id } = ctx.params
    /* get main_release, artist, id .. then use id here bellow */

    let { data } = await axios
    .get(`https://api.discogs.com/artists/${id}?token=XNpUINGKchTmtYBPPSVVULzcCAUjklDgTyzIqqZw`)
    .then( (res) => {
      return res
    })
    .catch(err => {return err});
    return data
  },

  async showMaster(ctx) {
    /*
    | Receive a query and and return related artists
    */
    const { id } = ctx.params
    /* get main_release, artist, id .. then use id here bellow */

    let { data } = await axios
    .get(`https://api.discogs.com/masters/${id}`)
    .then( (res) => {
      return res
    })
    .catch(err => {return err});
    return data
  },

  async showArtistReleases(ctx) {
    /*
    | Receive a query and and return related artist release
    */
    const { id } = ctx.params

    // artists/{artist_id}/releases{?sort,sort_order}
    let { data } = await axios
      .get(`https://api.discogs.com/artists/${id}/releases?token=XNpUINGKchTmtYBPPSVVULzcCAUjklDgTyzIqqZw`)
      .then(res => {return res})
      .catch(err => {return err});

    return data
  },

  async showAlbum(ctx) {
    /*
    | Receive a query and and return related artists
    */
    const { id } = ctx.params
    let { data } = await axios
      .get(`https://api.discogs.com/releases/${id}?token=XNpUINGKchTmtYBPPSVVULzcCAUjklDgTyzIqqZw`)
      .then(res => {return res})
      .catch(err => {return err});

    return data
  },
};
