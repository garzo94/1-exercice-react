import React , {useEffect} from 'react'

export default function AllCycle() {
    useEffect(() => {
      console.log('Componente creado')
      document.title = `${new Date()}` 
      const interval = setInterval(()=>{
          console.log('actualizacion del componente')
      }, 1000)
    
      return () => {
        console.log('Compoenente va a desaparecer')
        document.title = "Tiempo detenido";
        clearInterval(interval)
      }
    }, [])

    
  return (
    <div>AllCycle</div>
  )
}
