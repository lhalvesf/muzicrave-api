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

    let { data } = await axios
      .get(`https://api.discogs.com/database/search?token=XNpUINGKchTmtYBPPSVVULzcCAUjklDgTyzIqqZw`, { params: query })
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
    const q = ctx.request.url.split('/')[ctx.request.url.split('/').length - 1]

    // artists/{artist_id}/releases{?sort,sort_order}
    let { data } = await axios
      .get(`https://api.discogs.com/artists/${id}/${q}&token=XNpUINGKchTmtYBPPSVVULzcCAUjklDgTyzIqqZw`)
      .then(res => {return res})
      .catch(err => {return err});

    return data
  },

  async showMaster(ctx) {
    /*
    | Receive a query and and return related artists
    */
    const { id } = ctx.params
    let { data } = await axios
      .get(`https://api.discogs.com/masters/${id}?token=XNpUINGKchTmtYBPPSVVULzcCAUjklDgTyzIqqZw`)
      .then(res => {return res})
      .catch(err => {return err});

    return data
  },


  async showRelease(ctx) {
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


  async contact(ctx) {
    /*
    | Send email
    */
    const { name, email, message } = ctx.request.body

    const sendTo = 'lh.alvesf@gmail.com'
    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
      const emailOptions = {
        to: sendTo,
        subject: `Contato Muzicrave`,
        html: `
          <p>Nome: ${name}</p>\n
          <p>E-mail: ${email}</p>\n
          <p>Mensagem: ${message}</p>`,
        replyTo: email,
        text: message,
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }
  },


  async colaboratte(ctx) {
   /*
    | Send email
    */
    const { name, email, message } = ctx.request.body

    const sendTo = 'lh.alvesf@gmail.com'
    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
      const emailOptions = {
        to: sendTo,
        subject: `Contato Muzicrave [COLABORE]`,
        html: `
          <p>Nome: ${name}</p>\n
          <p>E-mail: ${email}</p>\n
          <p>Mensagem: ${message}</p>`,
        replyTo: email,
        text: message,
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }
  },

  async newsletter(ctx) {
    /*
    | Receive a query and and return related artists
    */
    const { query } = ctx.request.body
    console.log(query)
  },

};
