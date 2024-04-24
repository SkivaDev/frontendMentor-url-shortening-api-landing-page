import React from 'react'

const ShorteningSection = () => {
  return (
    <section>
        <Form/>
        <div>

        </div>
    </section>
  )
}

const Form = () => {
  return (
    <form>
        <div>
            <input type="text" placeholder="Shorten a link here..."/>
            <label htmlFor=""></label>
        </div>
        <button type="button">Shorten It!</button>
    </form>
  )
}

export default ShorteningSection