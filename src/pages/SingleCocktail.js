import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
          } = data.drinks[0]

          const currentDrink = {
            name,
            img,
            category,
            info,
            glass,
            instructions,
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
          }
          setDrink(currentDrink)
        } else {
          setDrink(null)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!drink) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  const {
    name,
    img,
    category,
    info,
    glass,
    instructions,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
  } = drink

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={img} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredient1} {ingredient2} {ingredient3} {ingredient4}
            {ingredient5}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
