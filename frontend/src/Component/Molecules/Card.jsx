import React from 'react'

const Card = ({name}) => {
  return (
    <article class="card">
      <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">
          {name}
        </h3>
        <div class="s-main-center">
          <a class="button--ghost-alert button--tiny" href="#">Ver información</a>
        </div>
      </div>
    </article>
  )
}

export default Card
