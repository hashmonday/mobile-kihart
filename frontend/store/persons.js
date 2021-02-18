export const state = () => ({
  lists: [],
  created_date: '',
  search: '',
  sort_by: 'created_at_descending',
  number: 0,
})

export const mutations = {
  setLists(state, data) {
    state.lists = data
  },
  setCreatedDate(state, data) {
    state.created_date = data
  },
  setSearch(state, data) {
    state.search = data
  },
  setSortBy(state, data) {
    state.sort_by = data
  },
  setNumber(state, data) {
    state.number = data
  },
}
