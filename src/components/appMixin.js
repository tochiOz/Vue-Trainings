export const namesMixin = {
  data () {
    return {
      names: ['Ekom', 'Kingsley', 'Richie', 'Idara', 'Femi', 'Emma', 'Peter', 'Ngozi', 'Ugo'],
      filterName: ''
    }
  },

  computed: {
    filteredName () {
      return this.names.filter((items ) => {//callbacks are called
        return items.match(this.filterName)
      })
    }
  },
  
}