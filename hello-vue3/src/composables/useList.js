import { ref, onMounted } from "vue"

export default function useList() {
  const list = ref([])
  const getList = () => {
    list.value = [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
    ]
  }
  onMounted(getList)
  return {
    list,
    getList
  }
}