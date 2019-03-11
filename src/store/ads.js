export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'i am description',
        promo: false,
        imageSrc: 'https://99px.ru/sstorage/53/2017/04/tmb_196719_2079.jpg',
        id: '1'
      },
      {
        title: 'Second ad',
        description: 'i am description',
        promo: true,
        imageSrc: 'https://99px.ru/sstorage/53/2017/04/tmb_196719_2079.jpg',
        id: '2'
      },
      {
        title: 'Third ad',
        description: 'i am description',
        promo: true,
        imageSrc: 'https://99px.ru/sstorage/53/2017/04/tmb_196719_2079.jpg',
        id: '3'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = Math.random().toString()
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => { return ad.promo === true })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
