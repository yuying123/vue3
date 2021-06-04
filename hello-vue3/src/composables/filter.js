import { ref, computed } from "vue"

export default function filter(list){
  const keywords = ref('')
  const filterList = computed(()=>{
    return list.value.filter(x=>{
      return x.name.includes(keywords.value)
    })
  })

  return {
    keywords,
    filterList
  }
}