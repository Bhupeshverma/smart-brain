import { css } from 'styled-components'
const sizes = {
   desktop: 1920,
   large: 1280,
   medium: 960,
   small: 540
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})