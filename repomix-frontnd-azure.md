This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
`````
public/
  favicon.svg
  icons.svg
src/
  api/
    http.js
  assets/
    hero.png
    react.svg
    vite.svg
  auth/
    AuthContext.jsx
    ProtectedRoute.jsx
    RoleRoute.jsx
  components/
    common/
      NumberInputWheelGuard.jsx
      States.jsx
      States.module.css
    workout/
      WorkoutPlanEditor.jsx
      WorkoutPlanEditor.module.css
  hooks/
    useApiData.js
  layouts/
    AppLayout.jsx
    AppLayout.module.css
    TrainerClientLayout.jsx
    TrainerClientLayout.module.css
  pages/
    client/
      Client.module.css
      ClientDashboard.jsx
      WorkoutSplitPage.jsx
    shared/
      Nutrition.module.css
      NutritionPage.jsx
      Workout.module.css
      WorkoutHistoryPage.jsx
      WorkoutRecordPage.jsx
    trainer/
      AddClientPage.jsx
      ClientDetailPage.jsx
      ClientsPage.jsx
      Trainer.module.css
      TrainerDashboard.jsx
      TrainerWorkoutPlanPage.jsx
    AccountPage.jsx
    LoginPage.jsx
    LoginPage.module.css
  styles/
    global.css
  utils/
    format.js
  App.jsx
  main.jsx
.dockerignore
.env.example
.gitignore
Dockerfile
eslint.config.js
index.html
nginx.conf
package.json
README.md
repomix-frontend.md
vite.config.js
`````

# Files

## File: public/favicon.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
`````

## File: public/icons.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
`````

## File: src/api/http.js
`````javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
export const TOKEN_KEY = 'fittrack_token'

export class ApiError extends Error {
  constructor(message, { status, code, fields } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.fields = fields || {}
  }
}

export async function api(path, options = {}) {
  const token = localStorage.getItem(TOKEN_KEY)
  const headers = new Headers(options.headers)
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')

  let response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers })
  } catch {
    throw new ApiError('The server is unavailable. Check that the backend is running.')
  }

  if (response.status === 204) return null
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem(TOKEN_KEY)
      window.dispatchEvent(new CustomEvent('fittrack:unauthorized', { detail: payload.error?.message }))
    }
    throw new ApiError(payload.error?.message || 'Request failed.', {
      status: response.status,
      code: payload.error?.code,
      fields: payload.error?.fields,
    })
  }
  return payload.data
}
`````

## File: src/assets/react.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
`````

## File: src/assets/vite.svg
`````xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
`````

## File: src/auth/AuthContext.jsx
`````javascript
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { api, TOKEN_KEY } from '../api/http'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sessionMessage, setSessionMessage] = useState('')

  const refreshCurrentUser = useCallback(async () => {
    if (!localStorage.getItem(TOKEN_KEY)) {
      setUser(null)
      setLoading(false)
      return null
    }
    try {
      const current = await api('/auth/me')
      setUser(current)
      return current
    } catch {
      setUser(null)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const startup = window.setTimeout(refreshCurrentUser, 0)
    const handleUnauthorized = (event) => {
      setUser(null)
      setSessionMessage(event.detail || 'Your session expired. Please log in again.')
    }
    window.addEventListener('fittrack:unauthorized', handleUnauthorized)
    return () => {
      window.clearTimeout(startup)
      window.removeEventListener('fittrack:unauthorized', handleUnauthorized)
    }
  }, [refreshCurrentUser])

  const login = useCallback(async (credentials) => {
    const result = await api('/auth/login', { method: 'POST', body: JSON.stringify(credentials) })
    localStorage.setItem(TOKEN_KEY, result.token)
    setSessionMessage('')
    setUser(result.user)
    return result.user
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, loading, login, logout, refreshCurrentUser, sessionMessage, setSessionMessage }), [user, loading, login, logout, refreshCurrentUser, sessionMessage])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
`````

## File: src/auth/ProtectedRoute.jsx
`````javascript
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { LoadingState } from '../components/common/States'

export function ProtectedRoute() {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) return <LoadingState label="Checking your session…" fullPage />
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />
  return <Outlet />
}
`````

## File: src/auth/RoleRoute.jsx
`````javascript
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

export function RoleRoute({ role }) {
  const { user } = useAuth()
  if (user?.role !== role) return <Navigate to={user?.role === 'trainer' ? '/trainer' : '/client'} replace />
  return <Outlet />
}
`````

## File: src/components/common/NumberInputWheelGuard.jsx
`````javascript
import { useEffect } from 'react'

export function NumberInputWheelGuard() {
  useEffect(() => {
    const stopWheelAdjustment = (event) => {
      const target = event.target
      if (target instanceof HTMLInputElement && target.type === 'number' && document.activeElement === target) {
        target.blur()
      }
    }
    document.addEventListener('wheel', stopWheelAdjustment, { capture: true, passive: true })
    return () => document.removeEventListener('wheel', stopWheelAdjustment, { capture: true })
  }, [])

  return null
}
`````

## File: src/components/common/States.jsx
`````javascript
import styles from './States.module.css'

export function LoadingState({ label = 'Loading…', fullPage = false }) {
  return <div className={`${styles.state} ${fullPage ? styles.fullPage : ''}`} role="status"><span className={styles.spinner} />{label}</div>
}

export function ErrorState({ message, onRetry }) {
  return <div className={`${styles.state} ${styles.error}`} role="alert"><strong>Something went wrong</strong><span>{message}</span>{onRetry && <button className="button button-secondary" onClick={onRetry}>Try again</button>}</div>
}

export function EmptyState({ title, message, action }) {
  return <div className={styles.state}><strong>{title}</strong><span>{message}</span>{action}</div>
}

export function StatusBadge({ children, tone = 'neutral' }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>
}
`````

## File: src/components/common/States.module.css
`````css
.state {
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .75rem;
  padding: 2rem;
  border: 1px dashed var(--color-border);
  background: var(--color-card);
  text-align: center;
}

.fullPage { min-height: 100vh; background: var(--color-bg-dark); color: #fff; border: 0; }
.error { border-color: #ef9a9a; background: #fff6f6; color: var(--color-danger); }
.spinner { width: 28px; height: 28px; border: 3px solid #bbb; border-top-color: var(--color-primary); border-radius: 50%; animation: spin .8s linear infinite; }
.badge { display: inline-flex; padding: .35rem .55rem; border: 1px solid currentColor; font-size: .72rem; line-height: 1; font-weight: 850; letter-spacing: .05em; text-transform: uppercase; }
.neutral { color: #4b5563; background: #f3f4f6; }
.success { color: var(--color-success); background: #f0fdf4; }
.warning { color: var(--color-warning); background: #fffbeb; }
.danger { color: var(--color-danger); background: #fff1f2; }
@keyframes spin { to { transform: rotate(360deg); } }
`````

## File: src/components/workout/WorkoutPlanEditor.jsx
`````javascript
/* eslint-disable react-refresh/only-export-components */
import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react'
import styles from './WorkoutPlanEditor.module.css'

export const blankExercise = () => ({ name: '', targetSets: 3, targetReps: 10, suggestedWeightKg: 0, notes: '' })
export const blankDay = (dayNumber) => ({ dayNumber, name: '', exercises: [blankExercise()] })

export function WorkoutPlanEditor({ plan, onChange }) {
  const setDayCount = (count) => {
    const days = Array.from({ length: count }, (_, index) => plan.days[index] || blankDay(index + 1))
      .map((day, index) => ({ ...day, dayNumber: index + 1 }))
    onChange({ ...plan, days })
  }

  const updateDay = (dayIndex, patch) => onChange({ ...plan, days: plan.days.map((day, index) => index === dayIndex ? { ...day, ...patch } : day) })
  const updateExercise = (dayIndex, exerciseIndex, patch) => {
    const exercises = plan.days[dayIndex].exercises.map((exercise, index) => index === exerciseIndex ? { ...exercise, ...patch } : exercise)
    updateDay(dayIndex, { exercises })
  }
  const removeExercise = (dayIndex, exerciseIndex) => updateDay(dayIndex, { exercises: plan.days[dayIndex].exercises.filter((_, index) => index !== exerciseIndex) })
  const moveExercise = (dayIndex, exerciseIndex, direction) => {
    const exercises = [...plan.days[dayIndex].exercises]
    const target = exerciseIndex + direction
    if (target < 0 || target >= exercises.length) return
    ;[exercises[exerciseIndex], exercises[target]] = [exercises[target], exercises[exerciseIndex]]
    updateDay(dayIndex, { exercises })
  }

  return <div className={styles.editor}>
    <label className={styles.dayCount}>Number of workout days<select value={plan.days.length} onChange={(event) => setDayCount(Number(event.target.value))}>{[1, 2, 3, 4, 5, 6, 7].map((number) => <option key={number}>{number}</option>)}</select></label>
    {plan.days.map((day, dayIndex) => <section className={styles.day} key={day.dayNumber}>
      <header><div><p className="eyebrow">DAY {day.dayNumber}</p><h3>{day.name || `Workout day ${day.dayNumber}`}</h3></div><label>Day name<input value={day.name} maxLength="100" placeholder="e.g. Lower Body" onChange={(event) => updateDay(dayIndex, { name: event.target.value })} /></label></header>
      <div className={styles.exercises}>
        {day.exercises.map((exercise, exerciseIndex) => <article className={styles.exercise} key={exercise._id || exerciseIndex}>
          <div className={styles.exerciseHead}><strong>Exercise {exerciseIndex + 1}</strong><div><button type="button" aria-label="Move exercise up" onClick={() => moveExercise(dayIndex, exerciseIndex, -1)} disabled={exerciseIndex === 0}><ArrowUp size={17} /></button><button type="button" aria-label="Move exercise down" onClick={() => moveExercise(dayIndex, exerciseIndex, 1)} disabled={exerciseIndex === day.exercises.length - 1}><ArrowDown size={17} /></button><button type="button" aria-label="Remove exercise" onClick={() => removeExercise(dayIndex, exerciseIndex)} disabled={day.exercises.length === 1}><Trash2 size={17} /></button></div></div>
          <label className={styles.name}>Exercise name<input required value={exercise.name} maxLength="120" onChange={(event) => updateExercise(dayIndex, exerciseIndex, { name: event.target.value })} /></label>
          <div className={styles.targets}><label>Target sets<input type="number" min="1" max="20" value={exercise.targetSets ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { targetSets: event.target.value === '' ? null : Number(event.target.value) })} /></label><label>Target reps<input type="number" min="1" max="100" value={exercise.targetReps ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { targetReps: event.target.value === '' ? null : Number(event.target.value) })} /></label><label>Suggested kg<input type="number" min="0" max="1000" step="0.5" value={exercise.suggestedWeightKg ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { suggestedWeightKg: event.target.value === '' ? null : Number(event.target.value) })} /></label></div>
          <label>Notes<textarea value={exercise.notes} maxLength="500" placeholder="Technique cues or alternatives" onChange={(event) => updateExercise(dayIndex, exerciseIndex, { notes: event.target.value })} /></label>
        </article>)}
      </div>
      <button type="button" className="button button-secondary" onClick={() => updateDay(dayIndex, { exercises: [...day.exercises, blankExercise()] })}><Plus size={17} /> Add exercise</button>
    </section>)}
  </div>
}
`````

## File: src/components/workout/WorkoutPlanEditor.module.css
`````css
.editor { display: grid; gap: 1.25rem; }
.dayCount { max-width: 260px; display: grid; gap: .35rem; font-weight: 700; }
.day { display: grid; gap: 1rem; padding: 1.25rem; border: 1px solid var(--color-border); border-top: 5px solid #222; background: #fff; }
.day > header { display: grid; grid-template-columns: 1fr minmax(220px, .7fr); gap: 1rem; align-items: end; }
.day > header label, .exercise label { display: grid; gap: .3rem; font-size: .85rem; font-weight: 700; }
.exercises { display: grid; gap: .85rem; }
.exercise { display: grid; grid-template-columns: 1.4fr repeat(3, .55fr); gap: .8rem; padding: 1rem; background: #f4f4f4; border-left: 3px solid #bbb; }
.exerciseHead { grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; }
.exerciseHead div { display: flex; gap: .3rem; }
.exerciseHead button { width: 36px; height: 36px; display: grid; place-items: center; border: 1px solid #ccc; background: #fff; }
.name { grid-column: 1 / -1; }
.targets { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3, 1fr); gap: .8rem; }
.exercise > label:last-child { grid-column: 1 / -1; }
@media (max-width: 700px) { .day > header { grid-template-columns: 1fr; } .targets { grid-template-columns: 1fr; } .day { padding: 1rem; } }
`````

## File: src/hooks/useApiData.js
`````javascript
import { useCallback, useEffect, useState } from 'react'
import { api } from '../api/http'

export function useApiData(path) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true); setError('')
    try { setData(await api(path)) }
    catch (requestError) { setError(requestError.message) }
    finally { setLoading(false) }
  }, [path])

  useEffect(() => {
    const timer = window.setTimeout(load, 0)
    return () => window.clearTimeout(timer)
  }, [load])

  return { data, setData, loading, error, reload: load }
}
`````

## File: src/layouts/AppLayout.jsx
`````javascript
import { Dumbbell, History, Home, LogOut, Salad, Settings, Users } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import styles from './AppLayout.module.css'

const trainerNav = [
  { to: '/trainer', label: 'Dashboard', icon: Home, end: true },
  { to: '/trainer/clients', label: 'Clients', icon: Users },
  { to: '/trainer/account', label: 'Account', icon: Settings },
]

const clientNav = [
  { to: '/client', label: 'Home', icon: Home, end: true },
  { to: '/client/workout', label: 'Workout', icon: Dumbbell },
  { to: '/client/nutrition', label: 'Nutrition', icon: Salad },
  { to: '/client/history', label: 'History', icon: History },
  { to: '/client/account', label: 'Account', icon: Settings },
]

export function AppLayout({ role }) {
  const { user, logout } = useAuth()
  const items = role === 'trainer' ? trainerNav : clientNav
  return (
    <div className={`${styles.shell} ${role === 'client' ? styles.clientShell : ''}`}>
      <aside className={styles.sidebar}>
        <NavLink to={role === 'trainer' ? '/trainer' : '/client'} className={styles.brand}>
          <span className={styles.brandMark}>FT</span>
          <span>FITTRACK<small>COACH</small></span>
        </NavLink>
        <div className={styles.profile}><span>{user?.name?.slice(0, 1)}</span><div><strong>{user?.name}</strong><small>{role}</small></div></div>
        <nav aria-label="Main navigation">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? styles.active : ''}>
              <Icon size={20} aria-hidden="true" /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <button className={styles.logout} onClick={logout}><LogOut size={20} /> <span>Log out</span></button>
      </aside>
      <header className={styles.mobileHeader}><strong>FITTRACK <span>COACH</span></strong><small>{user?.name}</small></header>
      <main className={styles.content}><Outlet /></main>
      {role === 'client' && <nav className={styles.bottomNav} aria-label="Mobile navigation">
        {items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end}><Icon size={20} /><span>{label}</span></NavLink>)}
      </nav>}
    </div>
  )
}
`````

## File: src/layouts/AppLayout.module.css
`````css
.shell { min-height: 100vh; display: grid; grid-template-columns: 250px minmax(0, 1fr); background: var(--color-page); }
.sidebar { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; padding: 1.25rem; color: #fff; background: var(--color-bg-dark); }
.brand { display: flex; align-items: center; gap: .7rem; padding: .35rem; color: #fff; font-size: 1.15rem; font-weight: 900; letter-spacing: .04em; }
.brand small { display: block; color: var(--color-primary); font-size: .68rem; letter-spacing: .18em; }
.brandMark { display: grid; place-items: center; width: 42px; height: 42px; background: var(--color-primary); font-weight: 950; transform: skew(-7deg); }
.profile { display: flex; align-items: center; gap: .7rem; margin: 2rem 0; padding: 1rem 0; border-block: 1px solid #333; }
.profile > span { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; color: #fff; background: #353535; font-weight: 800; }
.profile strong, .profile small { display: block; }
.profile small { color: #aaa; text-transform: capitalize; }
.sidebar nav { display: grid; gap: .35rem; }
.sidebar nav a, .logout { min-height: 46px; display: flex; align-items: center; gap: .75rem; padding: .7rem .8rem; border: 0; color: #c9c9c9; background: transparent; font: inherit; font-weight: 700; text-align: left; }
.sidebar nav a:hover, .sidebar nav a.active { color: #fff; background: #2d2d2d; }
.sidebar nav a.active { border-left: 4px solid var(--color-primary); }
.logout { margin-top: auto; width: 100%; cursor: pointer; }
.logout:hover { color: #fff; }
.content { min-width: 0; padding: clamp(1.25rem, 3vw, 3rem); }
.mobileHeader, .bottomNav { display: none; }
@media (max-width: 767px) {
  .shell { display: block; padding-bottom: 74px; }
  .sidebar { display: none; }
  .mobileHeader { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; min-height: 58px; padding: .8rem 1rem; color: #fff; background: var(--color-bg-dark); }
  .mobileHeader span { color: var(--color-primary); }
  .mobileHeader small { color: #bbb; }
  .content { padding: 1.15rem; }
  .bottomNav { position: fixed; z-index: 20; inset: auto 0 0; display: grid; grid-template-columns: repeat(5, 1fr); min-height: 66px; padding-bottom: env(safe-area-inset-bottom); border-top: 1px solid #333; background: #181818; }
  .bottomNav a { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .2rem; color: #aaa; font-size: .65rem; }
  .bottomNav a[aria-current='page'] { color: #fff; background: #272727; }
}
`````

## File: src/layouts/TrainerClientLayout.jsx
`````javascript
import { Dumbbell, History, Salad, UserRound } from 'lucide-react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { ErrorState, LoadingState } from '../components/common/States'
import { useApiData } from '../hooks/useApiData'
import styles from './TrainerClientLayout.module.css'

export function TrainerClientLayout() {
  const { clientId } = useParams()
  const location = useLocation()
  const { data, loading, error, reload } = useApiData(`/clients/${clientId}`)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />

  const tabs = [
    { label: 'Profile', to: `/trainer/clients/${clientId}`, icon: UserRound, active: location.pathname === `/trainer/clients/${clientId}` },
    { label: 'Workout Plan', to: `/trainer/clients/${clientId}/workout-plan`, icon: Dumbbell, active: location.pathname.includes('/workout-plan') || location.pathname.includes('/workout/') },
    { label: 'History', to: `/trainer/clients/${clientId}/history`, icon: History, active: location.pathname.includes('/history') },
    { label: 'Nutrition', to: `/trainer/clients/${clientId}/nutrition`, icon: Salad, active: location.pathname.includes('/nutrition') },
  ]

  return <div className="page-stack">
    <header className={styles.clientHeader}>
      <div className={styles.avatar}>{data.client.name.slice(0, 1)}</div>
      <div><p className="eyebrow">SELECTED CLIENT</p><h1>{data.client.name}</h1><span>{data.client.email}</span></div>
    </header>
    <nav className={styles.tabs} aria-label={`${data.client.name} sections`}>
      {tabs.map(({ label, to, icon: Icon, active }) => <NavLink key={to} to={to} end={label === 'Profile'} className={active ? styles.active : ''} aria-current={active ? 'page' : undefined}><Icon size={18} /> {label}</NavLink>)}
    </nav>
    <Outlet context={{ clientData: data, reloadClient: reload }} />
  </div>
}
`````

## File: src/layouts/TrainerClientLayout.module.css
`````css
.clientHeader { display: flex; align-items: center; gap: 1rem; padding: 1.5rem; color: #fff; background: #1d1d1d; }
.clientHeader h1 { margin-bottom: .2rem; }
.clientHeader span { color: #b8b8b8; }
.avatar { width: 64px; height: 64px; flex: 0 0 auto; display: grid; place-items: center; color: #fff; background: var(--color-primary); font-size: 1.5rem; font-weight: 900; }
.tabs { display: flex; flex-wrap: wrap; gap: .45rem; padding: .5rem; border: 1px solid var(--color-border); background: #fff; }
.tabs a { min-height: 44px; display: inline-flex; align-items: center; gap: .5rem; padding: .65rem .9rem; color: #555; border-left: 3px solid transparent; font-weight: 800; }
.tabs a:hover { color: #171717; background: #f2f2f2; }
.tabs a.active { color: #fff; border-left-color: #8f1119; background: var(--color-primary); }
@media (max-width: 640px) { .clientHeader { padding: 1rem; } .clientHeader h1 { font-size: 1.8rem; } .tabs { display: grid; grid-template-columns: repeat(2, 1fr); } .tabs a { justify-content: center; } }
`````

## File: src/pages/shared/Nutrition.module.css
`````css
.date { min-width: 220px; display: grid; gap: .3rem; font-size: .85rem; font-weight: 800; }
.summary { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.progress { padding: 1.3rem; border-top: 4px solid #222; background: #fff; }
.progress strong { font-size: 2rem; }
.progress strong small { color: var(--color-muted); font-size: .9rem; }
.track { height: 12px; margin: 1rem 0 .5rem; overflow: hidden; background: #ddd; }
.track span { display: block; height: 100%; background: var(--color-primary); transition: width .2s; }
.progress p:last-child { margin: 0; color: var(--color-muted); }
.progress p.over { color: var(--color-danger); font-weight: 800; }
.logHeader { display: flex; align-items: end; justify-content: space-between; gap: 1rem; }
.foodForm { display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: .8rem; border-top-color: var(--color-primary); }
.foodForm header { grid-column: 1 / -1; display: flex; justify-content: space-between; }
.foodForm header button { width: 42px; height: 42px; border: 0; background: #eee; }
.foodForm label { display: grid; gap: .3rem; font-size: .82rem; font-weight: 800; }
.foodName { grid-column: 1 / -1; }
.foodForm > div:last-child { grid-column: 1 / -1; }
.entries { display: grid; gap: .65rem; }
.foodCard { min-height: 80px; display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 1rem; padding: .9rem 1rem; border: 1px solid var(--color-border); border-left: 4px solid #222; background: #fff; }
.foodCard > div:first-child strong, .foodCard > div:first-child span { display: block; }
.foodCard > div:first-child span { color: var(--color-muted); font-size: .82rem; }
.macros { display: flex; gap: 1rem; }
.macros strong { min-width: 80px; font-size: 1.1rem; }
.macros small { display: block; color: var(--color-muted); font-size: .68rem; font-weight: 600; }
.foodActions { display: flex; gap: .3rem; }
.foodActions button { width: 38px; height: 38px; display: grid; place-items: center; border: 1px solid #ccc; background: #fff; }
@media (max-width: 700px) { .summary { grid-template-columns: 1fr; } .logHeader { align-items: stretch; flex-direction: column; } .logHeader .button { width: 100%; } .foodForm { grid-template-columns: 1fr; } .foodForm > * { grid-column: 1 !important; } .foodCard { grid-template-columns: 1fr auto; } .macros { grid-row: 2; } .foodActions { grid-column: 2; grid-row: 1 / 3; flex-direction: column; } }
`````

## File: src/pages/shared/NutritionPage.jsx
`````javascript
import { Edit3, Plus, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { formatDate, todayString } from '../../utils/format'
import styles from './Nutrition.module.css'

const blankEntry = (date) => ({ logDate: date, foodName: '', calories: 0, proteinGrams: 0, notes: '' })

export function NutritionPage({ role }) {
  const { clientId } = useParams()
  const [date, setDate] = useState(todayString())
  const basePath = role === 'trainer' ? `/clients/${clientId}/nutrition` : '/me/nutrition'
  const { data, loading, error, reload } = useApiData(`${basePath}?date=${date}`)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <NutritionContent role={role} data={data} date={date} setDate={setDate} reload={reload} />
}

function NutritionContent({ role, data, date, setDate, reload }) {
  const [form, setForm] = useState(null)
  const [editingId, setEditingId] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const openAdd = () => { setEditingId(''); setForm(blankEntry(date)); setError('') }
  const openEdit = (entry) => { setEditingId(entry._id); setForm({ logDate: entry.logDate, foodName: entry.foodName, calories: entry.calories, proteinGrams: entry.proteinGrams, notes: entry.notes || '' }); setError('') }
  const close = () => { setForm(null); setEditingId('') }
  const save = async (event) => {
    event.preventDefault(); setSaving(true); setError('')
    try {
      await api(editingId ? `/me/nutrition/${editingId}` : '/me/nutrition', { method: editingId ? 'PATCH' : 'POST', body: JSON.stringify(form) })
      close(); if (form.logDate !== date) setDate(form.logDate); else reload()
    } catch (requestError) { setError(requestError.message) } finally { setSaving(false) }
  }
  const remove = async (entry) => {
    if (!window.confirm(`Delete ${entry.foodName}?`)) return
    try { await api(`/me/nutrition/${entry._id}`, { method: 'DELETE' }); reload() }
    catch (requestError) { setError(requestError.message) }
  }
  const caloriePercent = Math.min(100, (data.totals.calories / data.target.calories) * 100)
  const proteinPercent = Math.min(100, (data.totals.proteinGrams / data.target.proteinGrams) * 100)
  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">DAILY NUTRITION</p><h1>{role === 'trainer' ? 'CLIENT NUTRITION LOG' : 'FUEL THE WORK'}</h1><p>{role === 'trainer' ? 'Read-only daily intake and current targets.' : 'Log any food or meal. No required meal categories.'}</p></div><label className={styles.date}>Selected date<input type="date" max={todayString()} value={date} onChange={(event) => { setDate(event.target.value); close() }} /></label></header>
    {error && <div className="alert alert-error">{error}</div>}
    <div className={styles.summary}><NutritionProgress label="Calories" consumed={data.totals.calories} target={data.target.calories} remaining={data.remaining.calories} unit="kcal" percent={caloriePercent} /><NutritionProgress label="Protein" consumed={data.totals.proteinGrams} target={data.target.proteinGrams} remaining={data.remaining.proteinGrams} unit="g" percent={proteinPercent} /></div>
    <div className={styles.logHeader}><div><p className="eyebrow">{formatDate(date).toUpperCase()}</p><h2>Food entries</h2></div>{role === 'client' && <button className="button button-primary" onClick={openAdd}><Plus size={17} /> Add food entry</button>}</div>
    {form && role === 'client' && <form className={`card ${styles.foodForm}`} onSubmit={save}><header><div><p className="eyebrow">{editingId ? 'EDIT ENTRY' : 'NEW ENTRY'}</p><h2>{editingId ? 'Update food entry' : 'What did you eat?'}</h2></div><button type="button" aria-label="Close form" onClick={close}><X /></button></header><label className={styles.foodName}>Food or meal name<input value={form.foodName} maxLength="150" required onChange={(event) => setForm({ ...form, foodName: event.target.value })} /></label><label>Date<input type="date" max={todayString()} value={form.logDate} onChange={(event) => setForm({ ...form, logDate: event.target.value })} /></label><label>Calories<input type="number" min="0" max="10000" value={form.calories} onChange={(event) => setForm({ ...form, calories: Number(event.target.value) })} /></label><label>Protein (g)<input type="number" min="0" max="1000" step="0.1" value={form.proteinGrams} onChange={(event) => setForm({ ...form, proteinGrams: Number(event.target.value) })} /></label><label className={styles.foodName}>Notes<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label><div><button className="button button-primary" disabled={saving}>{saving ? 'Saving…' : editingId ? 'Update entry' : 'Add entry'}</button></div></form>}
    {!data.entries.length ? <EmptyState title="No food entries for this date" message={role === 'client' ? 'Add your first food or meal above.' : 'This client has not logged anything for this date.'} /> : <div className={styles.entries}>{data.entries.map((entry) => <article className={styles.foodCard} key={entry._id}><div><strong>{entry.foodName}</strong><span>{entry.notes || 'No notes'}</span></div><div className={styles.macros}><strong>{entry.calories} <small>kcal</small></strong><strong>{entry.proteinGrams} <small>g protein</small></strong></div>{role === 'client' && <div className={styles.foodActions}><button aria-label={`Edit ${entry.foodName}`} onClick={() => openEdit(entry)}><Edit3 size={17} /></button><button aria-label={`Delete ${entry.foodName}`} onClick={() => remove(entry)}><Trash2 size={17} /></button></div>}</article>)}</div>}
  </div>
}

function NutritionProgress({ label, consumed, target, remaining, unit, percent }) {
  return <section className={styles.progress}><div><p className="eyebrow">{label}</p><strong>{consumed} <small>/ {target} {unit}</small></strong></div><div className={styles.track}><span style={{ width: `${percent}%` }} /></div><p className={remaining < 0 ? styles.over : ''}>{remaining >= 0 ? `${remaining} ${unit} remaining` : `${Math.abs(remaining)} ${unit} over target`}</p></section>
}
`````

## File: src/pages/shared/Workout.module.css
`````css
.date, .filter { min-width: 220px; display: grid; gap: .3rem; font-size: .85rem; font-weight: 800; }
.entries { display: grid; gap: 1rem; }
.exerciseEntry { display: grid; gap: 1rem; padding: clamp(1rem, 3vw, 1.5rem); border: 1px solid var(--color-border); border-top: 5px solid #222; background: #fff; }
.exerciseEntry > header { display: flex; justify-content: space-between; gap: 1rem; }
.target { text-align: right; }
.target strong, .target span { display: block; }
.target span { color: var(--color-muted); font-size: .85rem; }
.planNote { padding: .8rem; margin: 0; background: #f0f0f0; }
.sets { display: grid; gap: .5rem; }
.setRow { display: grid; grid-template-columns: 80px 1fr 1fr 44px; align-items: end; gap: .7rem; padding: .7rem; background: #f5f5f5; }
.setRow > strong { align-self: center; }
.setRow label, .notes { display: grid; gap: .25rem; font-size: .78rem; font-weight: 800; }
.setRow button { min-height: 46px; border: 1px solid #ccc; background: #fff; }
.finalSave { position: sticky; bottom: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem; color: #fff; background: #202020; box-shadow: 0 10px 40px rgb(0 0 0 / .25); }
.finalSave strong, .finalSave span { display: block; }
.finalSave span { color: #aaa; font-size: .83rem; }
.historyList { display: grid; gap: .7rem; }
.historyCard { border: 1px solid var(--color-border); background: #fff; }
.historySummary { width: 100%; min-height: 84px; display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 1rem; padding: 1rem; border: 0; border-left: 4px solid #252525; background: #fff; text-align: left; }
.historySummary div span, .historySummary > div:nth-child(2) span { display: block; color: var(--color-muted); font-size: .84rem; }
.historySummary > div:nth-child(2) { text-align: right; }
.historyDetail { display: grid; gap: 1rem; padding: 1rem; border-top: 1px solid var(--color-border); background: #f7f7f7; }
.historyDetail section { padding: 1rem; background: #fff; }
.historyDetail section > header { display: flex; justify-content: space-between; gap: 1rem; }
.historyDetail h3 { margin-bottom: .2rem; }
.historyDetail header span { color: var(--color-muted); font-size: .85rem; }
.setHistory { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .8rem; }
.setHistory span { padding: .5rem .7rem; background: #eee; font-size: .82rem; }
.setHistory strong { display: block; }
@media (max-width: 650px) { .exerciseEntry > header, .finalSave { align-items: stretch; flex-direction: column; } .target { text-align: left; } .setRow { grid-template-columns: 1fr 1fr; } .setRow > strong { grid-column: 1 / -1; } .historySummary { grid-template-columns: 1fr auto; } .historySummary > div:nth-child(2) { display: none; } }
`````

## File: src/pages/shared/WorkoutHistoryPage.jsx
`````javascript
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { EmptyState, ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { enumLabel, formatDate } from '../../utils/format'
import styles from './Workout.module.css'

export function WorkoutHistoryPage({ role }) {
  const { clientId } = useParams()
  const location = useLocation()
  const path = role === 'trainer' ? `/clients/${clientId}/workouts` : '/me/workouts'
  const { data, loading, error, reload } = useApiData(path)
  const [exerciseId, setExerciseId] = useState('')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const workouts = data.items
  return <HistoryContent workouts={workouts} exerciseId={exerciseId} setExerciseId={setExerciseId} success={location.state?.success} />
}

function HistoryContent({ workouts, exerciseId, setExerciseId, success }) {
  const [open, setOpen] = useState('')
  const exercises = useMemo(() => {
    const map = new Map()
    workouts.forEach((workout) => workout.exercises.forEach((exercise) => map.set(exercise.planExerciseId, exercise.exerciseName)))
    return [...map.entries()]
  }, [workouts])
  const filtered = exerciseId ? workouts.filter((workout) => workout.exercises.some((exercise) => exercise.planExerciseId === exerciseId)) : workouts
  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">PERMANENT RECORD</p><h1>WORKOUT HISTORY</h1><p>Actual dates, sets, repetitions, weights, and stored target snapshots.</p></div><label className={styles.filter}>Exercise history<select value={exerciseId} onChange={(event) => setExerciseId(event.target.value)}><option value="">All exercises</option>{exercises.map(([id, name]) => <option value={id} key={id}>{name}</option>)}</select></label></header>{success && <div className="alert alert-success">{success}</div>}
    {!filtered.length ? <EmptyState title="No completed workouts yet" message="Completed workouts will appear here permanently." /> : <div className={styles.historyList}>{filtered.map((workout) => <article className={styles.historyCard} key={workout._id}><button className={styles.historySummary} onClick={() => setOpen(open === workout._id ? '' : workout._id)}><div><strong>{formatDate(workout.completedDate)}</strong><span>Day {workout.workoutDayNumber} · {workout.workoutDayName || 'Workout'} · Cycle {workout.cycleNumber}</span></div><div><span>Revision {workout.planRevision}</span><span>Recorded by {workout.recordedByUserId?.role === 'trainer' ? 'Trainer' : 'Client'}</span></div>{open === workout._id ? <ChevronUp /> : <ChevronDown />}</button>{open === workout._id && <div className={styles.historyDetail}>{workout.exercises.filter((exercise) => !exerciseId || exercise.planExerciseId === exerciseId).map((exercise) => <section key={exercise.planExerciseId}><header><div><h3>{exercise.exerciseName}</h3><span>Target: {exercise.targetSnapshot.sets && exercise.targetSnapshot.reps ? `${exercise.targetSnapshot.sets} × ${exercise.targetSnapshot.reps}` : 'Unmeasured'}{exercise.targetSnapshot.suggestedWeightKg != null ? ` at ${exercise.targetSnapshot.suggestedWeightKg} kg` : ''}</span></div><StatusBadge tone={exercise.progressionStatus === 'READY_TO_PROGRESS' ? 'success' : exercise.progressionStatus === 'MAINTAIN' ? 'warning' : 'neutral'}>{enumLabel(exercise.progressionStatus)}</StatusBadge></header>{exercise.sets.length ? <div className={styles.setHistory}>{exercise.sets.map((set) => <span key={set.setNumber}><strong>Set {set.setNumber}</strong>{set.reps} reps · {set.weightKg} kg</span>)}</div> : <p className="muted">No measured sets.</p>}{exercise.notes && <p><strong>Result note:</strong> {exercise.notes}</p>}</section>)}</div>}</article>)}</div>}
  </div>
}
`````

## File: src/pages/trainer/AddClientPage.jsx
`````javascript
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api/http'
import { WorkoutPlanEditor, blankDay } from '../../components/workout/WorkoutPlanEditor'
import styles from './Trainer.module.css'

const steps = ['Account', 'Fitness profile', 'Nutrition targets', 'Workout plan', 'Review']
const initial = {
  account: { name: '', email: '', password: '', confirmPassword: '' },
  fitnessProfile: { age: 30, heightCm: 175, weightKg: 75, biologicalSex: 'male', activityLevel: 'moderate', goal: 'maintain' },
  nutritionTarget: { calories: 2400, proteinGrams: 150 },
  workoutPlan: { days: [blankDay(1), blankDay(2), blankDay(3)] },
}

export function AddClientPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initial)
  const [estimates, setEstimates] = useState(null)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const setSection = (section, patch) => setForm((current) => ({ ...current, [section]: { ...current[section], ...patch } }))

  const validateStep = () => {
    if (step === 0 && (!form.account.name || !form.account.email || form.account.password.length < 8)) return 'Complete the account fields. Password must be at least 8 characters.'
    if (step === 0 && form.account.password !== form.account.confirmPassword) return 'Passwords do not match.'
    if (step === 3 && form.workoutPlan.days.some((day) => !day.exercises.length || day.exercises.some((exercise) => !exercise.name))) return 'Every workout day needs at least one named exercise.'
    return ''
  }

  const next = async () => {
    const issue = validateStep(); setError(issue)
    if (issue) return
    if (step === 1) {
      try {
        const { age, heightCm, weightKg, biologicalSex, activityLevel } = form.fitnessProfile
        const inputs = { age, heightCm, weightKg, biologicalSex, activityLevel }
        setEstimates(await api('/calculations/tdee', { method: 'POST', body: JSON.stringify(inputs) }))
      } catch (requestError) { setError(requestError.message); return }
    }
    setStep((current) => Math.min(4, current + 1))
  }

  const create = async () => {
    setSubmitting(true); setError('')
    try {
      const payload = { ...form, account: { name: form.account.name, email: form.account.email, password: form.account.password } }
      const result = await api('/clients', { method: 'POST', body: JSON.stringify(payload) })
      navigate(`/trainer/clients/${result.client.id}`, { replace: true, state: { success: 'Client created successfully.' } })
    } catch (requestError) { setError(requestError.message) }
    finally { setSubmitting(false) }
  }

  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">NEW CLIENT</p><h1>BUILD THEIR PLAN</h1><p>Create the account, set targets, and prescribe the initial split in one flow.</p></div></header>
    <div className={styles.steps}>{steps.map((label, index) => <div key={label} className={`${styles.step} ${index === step ? styles.stepActive : ''}`}><span>{index < step ? <Check size={15} /> : index + 1}</span><strong>{label}</strong></div>)}</div>
    {error && <div className="alert alert-error" role="alert">{error}</div>}
    <section className={`card ${styles.wizard}`}>
      {step === 0 && <><div><p className="eyebrow">STEP 1</p><h2>Account details</h2></div><div className={styles.fieldGrid}><label>Client name<input value={form.account.name} onChange={(event) => setSection('account', { name: event.target.value })} /></label><label>Client email<input type="email" value={form.account.email} onChange={(event) => setSection('account', { email: event.target.value })} /></label><label>Initial password<input type="password" minLength="8" value={form.account.password} onChange={(event) => setSection('account', { password: event.target.value })} /></label><label>Confirm password<input type="password" value={form.account.confirmPassword} onChange={(event) => setSection('account', { confirmPassword: event.target.value })} /></label></div></>}
      {step === 1 && <><div><p className="eyebrow">STEP 2</p><h2>Fitness profile</h2><p className="muted">Biological sex is used only for the Mifflin-St Jeor calorie estimate.</p></div><div className={styles.fieldGrid}><NumberField label="Age" value={form.fitnessProfile.age} onChange={(age) => setSection('fitnessProfile', { age })} /><NumberField label="Height (cm)" value={form.fitnessProfile.heightCm} onChange={(heightCm) => setSection('fitnessProfile', { heightCm })} /><NumberField label="Weight (kg)" value={form.fitnessProfile.weightKg} onChange={(weightKg) => setSection('fitnessProfile', { weightKg })} /><label>Biological sex<select value={form.fitnessProfile.biologicalSex} onChange={(event) => setSection('fitnessProfile', { biologicalSex: event.target.value })}><option value="male">Male</option><option value="female">Female</option></select></label><label>Activity level<select value={form.fitnessProfile.activityLevel} onChange={(event) => setSection('fitnessProfile', { activityLevel: event.target.value })}><option value="sedentary">Sedentary</option><option value="light">Light</option><option value="moderate">Moderate</option><option value="very_active">Very active</option><option value="extra_active">Extra active</option></select></label><label>Fitness goal<select value={form.fitnessProfile.goal} onChange={(event) => setSection('fitnessProfile', { goal: event.target.value })}><option value="maintain">Maintain weight</option><option value="lose">Lose weight</option><option value="gain">Gain weight</option></select></label></div></>}
      {step === 2 && <><div><p className="eyebrow">STEP 3</p><h2>Nutrition targets</h2><p className="muted">Estimates are references only. Choose the actual targets for this client.</p></div>{estimates && <div className={styles.estimate}><div><strong>{estimates.bmr} kcal</strong><span>Estimated BMR</span></div><div><strong>{estimates.tdee} kcal</strong><span>Estimated maintenance (TDEE)</span></div></div>}<div className={styles.fieldGrid}><NumberField label="Daily calorie target" value={form.nutritionTarget.calories} onChange={(calories) => setSection('nutritionTarget', { calories })} /><NumberField label="Daily protein target (g)" value={form.nutritionTarget.proteinGrams} onChange={(proteinGrams) => setSection('nutritionTarget', { proteinGrams })} /></div></>}
      {step === 3 && <><div><p className="eyebrow">STEP 4</p><h2>Workout plan</h2><p className="muted">Choose 1–7 days. Day numbers describe the split, not weekdays.</p></div><WorkoutPlanEditor plan={form.workoutPlan} onChange={(workoutPlan) => setForm({ ...form, workoutPlan })} /></>}
      {step === 4 && <><div><p className="eyebrow">STEP 5</p><h2>Review and create</h2><p className="muted">The client can sign in immediately after creation.</p></div><div className={styles.reviewGrid}><section><strong>{form.account.name}</strong><span>{form.account.email}</span><span>Initial account password set</span></section><section><strong>{form.fitnessProfile.goal.replace('_', ' ')}</strong><span>{form.fitnessProfile.weightKg} kg · {form.fitnessProfile.heightCm} cm</span><span>{form.fitnessProfile.activityLevel.replace('_', ' ')}</span></section><section><strong>{form.nutritionTarget.calories} kcal / {form.nutritionTarget.proteinGrams} g</strong><span>{form.workoutPlan.days.length}-day split</span><span>{form.workoutPlan.days.reduce((total, day) => total + day.exercises.length, 0)} exercises</span></section></div>{form.workoutPlan.days.map((day) => <div key={day.dayNumber}><strong>Day {day.dayNumber}: {day.name || 'Untitled'}</strong><p className="muted">{day.exercises.map((exercise) => exercise.name).join(' · ')}</p></div>)}</>}
      <div className={styles.wizardActions}>{step > 0 ? <button type="button" className="button button-secondary" onClick={() => { setError(''); setStep(step - 1) }}><ChevronLeft size={18} /> Back</button> : <span />}{step < 4 ? <button type="button" className="button button-primary" onClick={next}>Continue <ChevronRight size={18} /></button> : <button className="button button-primary" onClick={create} disabled={submitting}>{submitting ? 'Creating…' : 'Create client'}</button>}</div>
    </section>
  </div>
}

function NumberField({ label, value, onChange }) {
  return <label>{label}<input type="number" min="1" value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>
}
`````

## File: src/pages/trainer/ClientsPage.jsx
`````javascript
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { ClientCard } from './TrainerDashboard'
import styles from './Trainer.module.css'

export function ClientsPage() {
  const { data: clients, loading, error, reload } = useApiData('/clients')
  const [query, setQuery] = useState('')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const filtered = clients.filter((client) => `${client.name} ${client.email}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">CLIENT MANAGEMENT</p><h1>YOUR CLIENTS</h1><p>Open a profile to manage training, nutrition targets, and history.</p></div><Link className="button button-primary" to="/trainer/clients/new"><Plus size={18} /> Add client</Link></header>
    <label className={styles.search}><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search clients" aria-label="Search clients" /></label>
    {!clients.length ? <EmptyState title="No clients yet" message="Add a client to create their first plan." /> : !filtered.length ? <EmptyState title="No match" message="Try a different name or email." /> : <div className={styles.clientGrid}>{filtered.map((client) => <ClientCard client={client} key={client.id} />)}</div>}
  </div>
}
`````

## File: src/pages/trainer/TrainerDashboard.jsx
`````javascript
import { ArrowRight, Plus, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Trainer.module.css'

export function TrainerDashboard() {
  const { user } = useAuth()
  const { data: clients, loading, error, reload } = useApiData('/clients')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">TRAINER DASHBOARD</p><h1>WELCOME, {user.name.split(' ')[0]}</h1><p>Keep every client moving forward.</p></div><Link className="button button-primary" to="/trainer/clients/new"><Plus size={18} /> Add client</Link></header>
    <div className="metric-grid"><div className="metric"><Users color="var(--color-primary)" /><strong>{clients.length}</strong><span>Assigned clients</span></div><div className="metric"><strong>{clients.filter((client) => client.latestWorkoutDate).length}</strong><span>Clients with workout history</span></div></div>
    <section><div className={styles.sectionHead}><div><p className="eyebrow">CLIENT ROSTER</p><h2>Quick access</h2></div><Link to="/trainer/clients">View all <ArrowRight size={17} /></Link></div>
      {!clients.length ? <EmptyState title="No clients yet" message="Add a client to create a workout and nutrition plan." action={<Link className="button button-primary" to="/trainer/clients/new">Add client</Link>} /> : <div className={styles.clientGrid}>{clients.slice(0, 6).map((client) => <ClientCard client={client} key={client.id} />)}</div>}
    </section>
  </div>
}

export function ClientCard({ client }) {
  return <Link className={styles.clientCard} to={`/trainer/clients/${client.id}`}><div className={styles.avatar}>{client.name.slice(0, 1)}</div><div className={styles.clientInfo}><strong>{client.name}</strong><span>{client.email}</span><small>{client.fitnessGoal?.replace('_', ' ') || 'Goal not set'} · {client.latestWorkoutDate ? `Last workout ${client.latestWorkoutDate}` : 'No workouts yet'}</small></div><ArrowRight size={20} /></Link>
}
`````

## File: src/pages/AccountPage.jsx
`````javascript
import { useState } from 'react'
import { api } from '../api/http'
import { useAuth } from '../auth/AuthContext'

export function AccountPage() {
  const { user, refreshCurrentUser } = useAuth()
  const [emailForm, setEmailForm] = useState({ email: user.email, currentPassword: '' })
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [busy, setBusy] = useState('')

  const changeEmail = async (event) => {
    event.preventDefault(); setBusy('email'); setStatus({ type: '', message: '' })
    try {
      await api('/me/account', { method: 'PATCH', body: JSON.stringify(emailForm) })
      await refreshCurrentUser(); setEmailForm((current) => ({ ...current, currentPassword: '' }))
      setStatus({ type: 'success', message: 'Email updated successfully.' })
    } catch (error) { setStatus({ type: 'error', message: error.message }) }
    finally { setBusy('') }
  }

  const changePassword = async (event) => {
    event.preventDefault(); setStatus({ type: '', message: '' })
    if (passwordForm.newPassword !== passwordForm.confirmPassword) return setStatus({ type: 'error', message: 'New passwords do not match.' })
    setBusy('password')
    try {
      await api('/me/password', { method: 'PUT', body: JSON.stringify({ currentPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword }) })
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setStatus({ type: 'success', message: 'Password updated successfully.' })
    } catch (error) { setStatus({ type: 'error', message: error.message }) }
    finally { setBusy('') }
  }

  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">ACCOUNT</p><h1>YOUR SETTINGS</h1><p>Keep your sign-in details current and secure.</p></div></header>
    {status.message && <div className={`alert alert-${status.type}`}>{status.message}</div>}
    <div className="two-column">
      <form className="card form-stack" onSubmit={changeEmail}><div><p className="eyebrow">EMAIL</p><h2>Change email</h2></div><label>New email<input type="email" value={emailForm.email} onChange={(event) => setEmailForm({ ...emailForm, email: event.target.value })} required /></label><label>Current password<input type="password" value={emailForm.currentPassword} onChange={(event) => setEmailForm({ ...emailForm, currentPassword: event.target.value })} required /></label><button className="button button-primary" disabled={busy === 'email'}>{busy === 'email' ? 'Saving…' : 'Update email'}</button></form>
      <form className="card form-stack" onSubmit={changePassword}><div><p className="eyebrow">PASSWORD</p><h2>Change password</h2></div><label>Current password<input type="password" value={passwordForm.currentPassword} onChange={(event) => setPasswordForm({ ...passwordForm, currentPassword: event.target.value })} required /></label><label>New password<input type="password" minLength="8" value={passwordForm.newPassword} onChange={(event) => setPasswordForm({ ...passwordForm, newPassword: event.target.value })} required /></label><label>Confirm new password<input type="password" value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm({ ...passwordForm, confirmPassword: event.target.value })} required /></label><button className="button button-primary" disabled={busy === 'password'}>{busy === 'password' ? 'Saving…' : 'Update password'}</button></form>
    </div>
  </div>
}
`````

## File: src/pages/LoginPage.module.css
`````css
.page { min-height: 100vh; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(420px, .85fr); color: #fff; background: #141414; }
.pitch { min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: clamp(2rem, 6vw, 5.5rem); background: radial-gradient(circle at 80% 10%, #59151b 0, transparent 30%), linear-gradient(135deg, #111 0 64%, #1f1f1f 64%); }
.brand { display: flex; align-items: center; gap: .75rem; font-size: 1.15rem; }
.brand > span { display: grid; place-items: center; width: 45px; height: 45px; background: var(--color-primary); font-weight: 950; transform: skew(-8deg); }
.brand em { display: block; color: var(--color-primary); font-size: .65rem; font-style: normal; letter-spacing: .25em; }
.kicker { color: #ff7279; font-size: .8rem; font-weight: 850; letter-spacing: .18em; }
.pitch h1 { margin: .7rem 0 1.2rem; font-size: clamp(3.1rem, 7vw, 6.8rem); line-height: .88; letter-spacing: -.055em; }
.pitch h1 span { color: var(--color-primary); }
.pitch p { max-width: 560px; color: #bbb; }
.stat { display: flex; align-items: center; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid #333; }
.stat svg { color: var(--color-primary); }
.stat strong, .stat span { display: block; }
.stat span { margin-top: .2rem; color: #999; font-size: .85rem; }
.formPanel { display: grid; place-items: center; padding: 2rem; background: #f3f3f3; color: var(--color-text); }
.form { width: min(430px, 100%); display: grid; gap: 1.15rem; padding: clamp(1.5rem, 4vw, 3rem); background: #fff; border-top: 6px solid var(--color-primary); box-shadow: 0 24px 70px rgb(0 0 0 / .16); }
.form h2 { margin: -.5rem 0; font-size: 2.4rem; }
.form label { display: grid; gap: .4rem; font-weight: 700; }
.demo { display: grid; gap: .25rem; margin-top: .5rem; padding: .9rem; background: #f4f4f4; font-size: .8rem; color: #666; }
.demo strong { color: #222; }
@media (max-width: 850px) { .page { grid-template-columns: 1fr; } .pitch { min-height: auto; gap: 3rem; padding: 2rem; } .pitch h1 { font-size: 3.3rem; } .formPanel { min-height: 520px; padding: 1rem; } }
`````

## File: .dockerignore
`````
node_modules

dist

.git

.gitignore

README.md

Dockerfile

.dockerignore
`````

## File: .env.example
`````
VITE_API_BASE_URL=http://localhost:3000/api
`````

## File: Dockerfile
`````dockerfile
# Build stage

FROM node:22-alpine AS build

WORKDIR /app



COPY package*.json ./

RUN npm ci



COPY . .



# Vite inlines VITE_* vars at build time; pass via --build-arg to override .env files

ARG VITE_API_URL

ENV VITE_API_URL=$VITE_API_URL

RUN npm run build



# Production stage

FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
`````

## File: eslint.config.js
`````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
`````

## File: nginx.conf
`````ini
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    # Support client-side routing (react-router-dom)
    location / {
        try_files $uri $uri/ /index.html;
    }
}
`````

## File: repomix-frontend.md
`````markdown
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  favicon.svg
  icons.svg
src/
  api/
    http.js
  assets/
    hero.png
    react.svg
    vite.svg
  auth/
    AuthContext.jsx
    ProtectedRoute.jsx
    RoleRoute.jsx
  components/
    common/
      States.jsx
      States.module.css
    workout/
      WorkoutPlanEditor.jsx
      WorkoutPlanEditor.module.css
  hooks/
    useApiData.js
  layouts/
    AppLayout.jsx
    AppLayout.module.css
  pages/
    client/
      Client.module.css
      ClientDashboard.jsx
      WorkoutSplitPage.jsx
    shared/
      Nutrition.module.css
      NutritionPage.jsx
      Workout.module.css
      WorkoutHistoryPage.jsx
      WorkoutRecordPage.jsx
    trainer/
      AddClientPage.jsx
      ClientDetailPage.jsx
      ClientsPage.jsx
      Trainer.module.css
      TrainerDashboard.jsx
      TrainerWorkoutPlanPage.jsx
    AccountPage.jsx
    LoginPage.jsx
    LoginPage.module.css
  styles/
    global.css
  utils/
    format.js
  App.jsx
  main.jsx
.env.example
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
````

# Files

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

## File: public/icons.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

## File: src/api/http.js
````javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
export const TOKEN_KEY = 'fittrack_token'

export class ApiError extends Error {
  constructor(message, { status, code, fields } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.fields = fields || {}
  }
}

export async function api(path, options = {}) {
  const token = localStorage.getItem(TOKEN_KEY)
  const headers = new Headers(options.headers)
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')

  let response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers })
  } catch {
    throw new ApiError('The server is unavailable. Check that the backend is running.')
  }

  if (response.status === 204) return null
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem(TOKEN_KEY)
      window.dispatchEvent(new CustomEvent('fittrack:unauthorized', { detail: payload.error?.message }))
    }
    throw new ApiError(payload.error?.message || 'Request failed.', {
      status: response.status,
      code: payload.error?.code,
      fields: payload.error?.fields,
    })
  }
  return payload.data
}
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/assets/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## File: src/auth/AuthContext.jsx
````javascript
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { api, TOKEN_KEY } from '../api/http'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sessionMessage, setSessionMessage] = useState('')

  const refreshCurrentUser = useCallback(async () => {
    if (!localStorage.getItem(TOKEN_KEY)) {
      setUser(null)
      setLoading(false)
      return null
    }
    try {
      const current = await api('/auth/me')
      setUser(current)
      return current
    } catch {
      setUser(null)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const startup = window.setTimeout(refreshCurrentUser, 0)
    const handleUnauthorized = (event) => {
      setUser(null)
      setSessionMessage(event.detail || 'Your session expired. Please log in again.')
    }
    window.addEventListener('fittrack:unauthorized', handleUnauthorized)
    return () => {
      window.clearTimeout(startup)
      window.removeEventListener('fittrack:unauthorized', handleUnauthorized)
    }
  }, [refreshCurrentUser])

  const login = useCallback(async (credentials) => {
    const result = await api('/auth/login', { method: 'POST', body: JSON.stringify(credentials) })
    localStorage.setItem(TOKEN_KEY, result.token)
    setSessionMessage('')
    setUser(result.user)
    return result.user
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, loading, login, logout, refreshCurrentUser, sessionMessage, setSessionMessage }), [user, loading, login, logout, refreshCurrentUser, sessionMessage])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
````

## File: src/auth/ProtectedRoute.jsx
````javascript
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { LoadingState } from '../components/common/States'

export function ProtectedRoute() {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) return <LoadingState label="Checking your session…" fullPage />
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />
  return <Outlet />
}
````

## File: src/auth/RoleRoute.jsx
````javascript
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

export function RoleRoute({ role }) {
  const { user } = useAuth()
  if (user?.role !== role) return <Navigate to={user?.role === 'trainer' ? '/trainer' : '/client'} replace />
  return <Outlet />
}
````

## File: src/components/common/States.jsx
````javascript
import styles from './States.module.css'

export function LoadingState({ label = 'Loading…', fullPage = false }) {
  return <div className={`${styles.state} ${fullPage ? styles.fullPage : ''}`} role="status"><span className={styles.spinner} />{label}</div>
}

export function ErrorState({ message, onRetry }) {
  return <div className={`${styles.state} ${styles.error}`} role="alert"><strong>Something went wrong</strong><span>{message}</span>{onRetry && <button className="button button-secondary" onClick={onRetry}>Try again</button>}</div>
}

export function EmptyState({ title, message, action }) {
  return <div className={styles.state}><strong>{title}</strong><span>{message}</span>{action}</div>
}

export function StatusBadge({ children, tone = 'neutral' }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>
}
````

## File: src/components/common/States.module.css
````css
.state {
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .75rem;
  padding: 2rem;
  border: 1px dashed var(--color-border);
  background: var(--color-card);
  text-align: center;
}

.fullPage { min-height: 100vh; background: var(--color-bg-dark); color: #fff; border: 0; }
.error { border-color: #ef9a9a; background: #fff6f6; color: var(--color-danger); }
.spinner { width: 28px; height: 28px; border: 3px solid #bbb; border-top-color: var(--color-primary); border-radius: 50%; animation: spin .8s linear infinite; }
.badge { display: inline-flex; padding: .35rem .55rem; border: 1px solid currentColor; font-size: .72rem; line-height: 1; font-weight: 850; letter-spacing: .05em; text-transform: uppercase; }
.neutral { color: #4b5563; background: #f3f4f6; }
.success { color: var(--color-success); background: #f0fdf4; }
.warning { color: var(--color-warning); background: #fffbeb; }
.danger { color: var(--color-danger); background: #fff1f2; }
@keyframes spin { to { transform: rotate(360deg); } }
````

## File: src/components/workout/WorkoutPlanEditor.jsx
````javascript
/* eslint-disable react-refresh/only-export-components */
import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react'
import styles from './WorkoutPlanEditor.module.css'

export const blankExercise = () => ({ name: '', targetSets: 3, targetReps: 10, suggestedWeightKg: 0, notes: '' })
export const blankDay = (dayNumber) => ({ dayNumber, name: '', exercises: [blankExercise()] })

export function WorkoutPlanEditor({ plan, onChange }) {
  const setDayCount = (count) => {
    const days = Array.from({ length: count }, (_, index) => plan.days[index] || blankDay(index + 1))
      .map((day, index) => ({ ...day, dayNumber: index + 1 }))
    onChange({ ...plan, days })
  }

  const updateDay = (dayIndex, patch) => onChange({ ...plan, days: plan.days.map((day, index) => index === dayIndex ? { ...day, ...patch } : day) })
  const updateExercise = (dayIndex, exerciseIndex, patch) => {
    const exercises = plan.days[dayIndex].exercises.map((exercise, index) => index === exerciseIndex ? { ...exercise, ...patch } : exercise)
    updateDay(dayIndex, { exercises })
  }
  const removeExercise = (dayIndex, exerciseIndex) => updateDay(dayIndex, { exercises: plan.days[dayIndex].exercises.filter((_, index) => index !== exerciseIndex) })
  const moveExercise = (dayIndex, exerciseIndex, direction) => {
    const exercises = [...plan.days[dayIndex].exercises]
    const target = exerciseIndex + direction
    if (target < 0 || target >= exercises.length) return
    ;[exercises[exerciseIndex], exercises[target]] = [exercises[target], exercises[exerciseIndex]]
    updateDay(dayIndex, { exercises })
  }

  return <div className={styles.editor}>
    <label className={styles.dayCount}>Number of workout days<select value={plan.days.length} onChange={(event) => setDayCount(Number(event.target.value))}>{[1, 2, 3, 4, 5, 6, 7].map((number) => <option key={number}>{number}</option>)}</select></label>
    {plan.days.map((day, dayIndex) => <section className={styles.day} key={day.dayNumber}>
      <header><div><p className="eyebrow">DAY {day.dayNumber}</p><h3>{day.name || `Workout day ${day.dayNumber}`}</h3></div><label>Day name<input value={day.name} maxLength="100" placeholder="e.g. Lower Body" onChange={(event) => updateDay(dayIndex, { name: event.target.value })} /></label></header>
      <div className={styles.exercises}>
        {day.exercises.map((exercise, exerciseIndex) => <article className={styles.exercise} key={exercise._id || exerciseIndex}>
          <div className={styles.exerciseHead}><strong>Exercise {exerciseIndex + 1}</strong><div><button type="button" aria-label="Move exercise up" onClick={() => moveExercise(dayIndex, exerciseIndex, -1)} disabled={exerciseIndex === 0}><ArrowUp size={17} /></button><button type="button" aria-label="Move exercise down" onClick={() => moveExercise(dayIndex, exerciseIndex, 1)} disabled={exerciseIndex === day.exercises.length - 1}><ArrowDown size={17} /></button><button type="button" aria-label="Remove exercise" onClick={() => removeExercise(dayIndex, exerciseIndex)} disabled={day.exercises.length === 1}><Trash2 size={17} /></button></div></div>
          <label className={styles.name}>Exercise name<input required value={exercise.name} maxLength="120" onChange={(event) => updateExercise(dayIndex, exerciseIndex, { name: event.target.value })} /></label>
          <div className={styles.targets}><label>Target sets<input type="number" min="1" max="20" value={exercise.targetSets ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { targetSets: event.target.value === '' ? null : Number(event.target.value) })} /></label><label>Target reps<input type="number" min="1" max="100" value={exercise.targetReps ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { targetReps: event.target.value === '' ? null : Number(event.target.value) })} /></label><label>Suggested kg<input type="number" min="0" max="1000" step="0.5" value={exercise.suggestedWeightKg ?? ''} onChange={(event) => updateExercise(dayIndex, exerciseIndex, { suggestedWeightKg: event.target.value === '' ? null : Number(event.target.value) })} /></label></div>
          <label>Notes<textarea value={exercise.notes} maxLength="500" placeholder="Technique cues or alternatives" onChange={(event) => updateExercise(dayIndex, exerciseIndex, { notes: event.target.value })} /></label>
        </article>)}
      </div>
      <button type="button" className="button button-secondary" onClick={() => updateDay(dayIndex, { exercises: [...day.exercises, blankExercise()] })}><Plus size={17} /> Add exercise</button>
    </section>)}
  </div>
}
````

## File: src/components/workout/WorkoutPlanEditor.module.css
````css
.editor { display: grid; gap: 1.25rem; }
.dayCount { max-width: 260px; display: grid; gap: .35rem; font-weight: 700; }
.day { display: grid; gap: 1rem; padding: 1.25rem; border: 1px solid var(--color-border); border-top: 5px solid #222; background: #fff; }
.day > header { display: grid; grid-template-columns: 1fr minmax(220px, .7fr); gap: 1rem; align-items: end; }
.day > header label, .exercise label { display: grid; gap: .3rem; font-size: .85rem; font-weight: 700; }
.exercises { display: grid; gap: .85rem; }
.exercise { display: grid; grid-template-columns: 1.4fr repeat(3, .55fr); gap: .8rem; padding: 1rem; background: #f4f4f4; border-left: 3px solid #bbb; }
.exerciseHead { grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; }
.exerciseHead div { display: flex; gap: .3rem; }
.exerciseHead button { width: 36px; height: 36px; display: grid; place-items: center; border: 1px solid #ccc; background: #fff; }
.name { grid-column: 1 / -1; }
.targets { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3, 1fr); gap: .8rem; }
.exercise > label:last-child { grid-column: 1 / -1; }
@media (max-width: 700px) { .day > header { grid-template-columns: 1fr; } .targets { grid-template-columns: 1fr; } .day { padding: 1rem; } }
````

## File: src/hooks/useApiData.js
````javascript
import { useCallback, useEffect, useState } from 'react'
import { api } from '../api/http'

export function useApiData(path) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true); setError('')
    try { setData(await api(path)) }
    catch (requestError) { setError(requestError.message) }
    finally { setLoading(false) }
  }, [path])

  useEffect(() => {
    const timer = window.setTimeout(load, 0)
    return () => window.clearTimeout(timer)
  }, [load])

  return { data, setData, loading, error, reload: load }
}
````

## File: src/layouts/AppLayout.jsx
````javascript
import { Dumbbell, History, Home, LogOut, Salad, Settings, Users } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import styles from './AppLayout.module.css'

const trainerNav = [
  { to: '/trainer', label: 'Dashboard', icon: Home, end: true },
  { to: '/trainer/clients', label: 'Clients', icon: Users },
  { to: '/trainer/account', label: 'Account', icon: Settings },
]

const clientNav = [
  { to: '/client', label: 'Home', icon: Home, end: true },
  { to: '/client/workout', label: 'Workout', icon: Dumbbell },
  { to: '/client/nutrition', label: 'Nutrition', icon: Salad },
  { to: '/client/history', label: 'History', icon: History },
  { to: '/client/account', label: 'Account', icon: Settings },
]

export function AppLayout({ role }) {
  const { user, logout } = useAuth()
  const items = role === 'trainer' ? trainerNav : clientNav
  return (
    <div className={`${styles.shell} ${role === 'client' ? styles.clientShell : ''}`}>
      <aside className={styles.sidebar}>
        <NavLink to={role === 'trainer' ? '/trainer' : '/client'} className={styles.brand}>
          <span className={styles.brandMark}>FT</span>
          <span>FITTRACK<small>COACH</small></span>
        </NavLink>
        <div className={styles.profile}><span>{user?.name?.slice(0, 1)}</span><div><strong>{user?.name}</strong><small>{role}</small></div></div>
        <nav aria-label="Main navigation">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? styles.active : ''}>
              <Icon size={20} aria-hidden="true" /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <button className={styles.logout} onClick={logout}><LogOut size={20} /> <span>Log out</span></button>
      </aside>
      <header className={styles.mobileHeader}><strong>FITTRACK <span>COACH</span></strong><small>{user?.name}</small></header>
      <main className={styles.content}><Outlet /></main>
      {role === 'client' && <nav className={styles.bottomNav} aria-label="Mobile navigation">
        {items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end}><Icon size={20} /><span>{label}</span></NavLink>)}
      </nav>}
    </div>
  )
}
````

## File: src/layouts/AppLayout.module.css
````css
.shell { min-height: 100vh; display: grid; grid-template-columns: 250px minmax(0, 1fr); background: var(--color-page); }
.sidebar { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; padding: 1.25rem; color: #fff; background: var(--color-bg-dark); }
.brand { display: flex; align-items: center; gap: .7rem; padding: .35rem; color: #fff; font-size: 1.15rem; font-weight: 900; letter-spacing: .04em; }
.brand small { display: block; color: var(--color-primary); font-size: .68rem; letter-spacing: .18em; }
.brandMark { display: grid; place-items: center; width: 42px; height: 42px; background: var(--color-primary); font-weight: 950; transform: skew(-7deg); }
.profile { display: flex; align-items: center; gap: .7rem; margin: 2rem 0; padding: 1rem 0; border-block: 1px solid #333; }
.profile > span { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; color: #fff; background: #353535; font-weight: 800; }
.profile strong, .profile small { display: block; }
.profile small { color: #aaa; text-transform: capitalize; }
.sidebar nav { display: grid; gap: .35rem; }
.sidebar nav a, .logout { min-height: 46px; display: flex; align-items: center; gap: .75rem; padding: .7rem .8rem; border: 0; color: #c9c9c9; background: transparent; font: inherit; font-weight: 700; text-align: left; }
.sidebar nav a:hover, .sidebar nav a.active { color: #fff; background: #2d2d2d; }
.sidebar nav a.active { border-left: 4px solid var(--color-primary); }
.logout { margin-top: auto; width: 100%; cursor: pointer; }
.logout:hover { color: #fff; }
.content { min-width: 0; padding: clamp(1.25rem, 3vw, 3rem); }
.mobileHeader, .bottomNav { display: none; }
@media (max-width: 767px) {
  .shell { display: block; padding-bottom: 74px; }
  .sidebar { display: none; }
  .mobileHeader { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; min-height: 58px; padding: .8rem 1rem; color: #fff; background: var(--color-bg-dark); }
  .mobileHeader span { color: var(--color-primary); }
  .mobileHeader small { color: #bbb; }
  .content { padding: 1.15rem; }
  .bottomNav { position: fixed; z-index: 20; inset: auto 0 0; display: grid; grid-template-columns: repeat(5, 1fr); min-height: 66px; padding-bottom: env(safe-area-inset-bottom); border-top: 1px solid #333; background: #181818; }
  .bottomNav a { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .2rem; color: #aaa; font-size: .65rem; }
  .bottomNav a[aria-current='page'] { color: #fff; background: #272727; }
}
````

## File: src/pages/client/Client.module.css
````css
.welcome { min-height: 150px; padding: 2rem; color: #fff; border: 0; border-left: 7px solid var(--color-primary); background: linear-gradient(120deg, #181818, #2b2b2b); }
.actionGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.actionCard { min-height: 175px; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; padding: 1.4rem; border: 1px solid var(--color-border); background: #fff; }
.actionCard:hover { border-color: var(--color-primary); }
.actionCard p { margin-bottom: 0; color: var(--color-muted); }
.actionIcon { width: 54px; height: 54px; display: grid; place-items: center; color: #fff; background: var(--color-primary); }
.workoutGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); gap: 1.2rem; }
.workoutDay { display: flex; flex-direction: column; min-height: 360px; padding: 1.25rem; border: 1px solid var(--color-border); border-top: 5px solid #252525; background: #fff; }
.workoutDay.next { border-top-color: var(--color-primary); box-shadow: 0 10px 30px rgb(229 43 53 / .1); }
.workoutDay > header { display: flex; justify-content: space-between; align-items: start; gap: .7rem; }
.exercisePreview { flex: 1; display: grid; align-content: start; gap: .35rem; margin: .6rem 0 1rem; }
.exercisePreview > div { display: flex; align-items: center; justify-content: space-between; gap: .5rem; padding: .7rem 0; border-bottom: 1px solid #eee; }
.exercisePreview strong, .exercisePreview span { display: block; }
.exercisePreview span { color: var(--color-muted); font-size: .83rem; }
.completeAction { min-height: 46px; display: flex; align-items: center; justify-content: center; gap: .5rem; color: var(--color-success); background: #f0fdf4; font-weight: 800; }
.cycleNote { display: flex; gap: .7rem; padding: 1rem; border-left: 4px solid #555; background: #e9e9e9; }
.cycleNote p { margin: 0; }
@media (max-width: 720px) { .actionGrid { grid-template-columns: 1fr; } .workoutGrid { grid-template-columns: 1fr; } .actionCard { min-height: 140px; } }
````

## File: src/pages/client/ClientDashboard.jsx
````javascript
import { ArrowRight, Dumbbell, Salad } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { todayString } from '../../utils/format'
import styles from './Client.module.css'

export function ClientDashboard() {
  const { user } = useAuth()
  const plan = useApiData('/me/workout-plan')
  const nutrition = useApiData(`/me/nutrition?date=${todayString()}`)
  if (plan.loading || nutrition.loading) return <LoadingState />
  if (plan.error || nutrition.error) return <ErrorState message={plan.error || nutrition.error} onRetry={() => { plan.reload(); nutrition.reload() }} />
  const nextDay = plan.data.plan.days.find((day) => day.dayNumber === plan.data.cycle.nextSuggestedDayNumber)
  return <div className="page-stack">
    <header className={`page-header ${styles.welcome}`}><div><p className="eyebrow">TODAY'S OVERVIEW</p><h1>READY, {user.name.split(' ')[0]}?</h1><p>Stay consistent. The numbers will follow.</p></div></header>
    <div className={styles.actionGrid}>
      <Link to="/client/workout" className={styles.actionCard}><div className={styles.actionIcon}><Dumbbell /></div><div><p className="eyebrow">NEXT SUGGESTED</p><h2>{nextDay ? `DAY ${nextDay.dayNumber} · ${nextDay.name || 'WORKOUT'}` : 'NEW CYCLE READY'}</h2><p>{plan.data.cycle.completedCount} of {plan.data.cycle.totalDays} workout days complete</p></div><ArrowRight /></Link>
      <Link to="/client/nutrition" className={styles.actionCard}><div className={styles.actionIcon}><Salad /></div><div><p className="eyebrow">TODAY'S NUTRITION</p><h2>{nutrition.data.totals.calories} / {nutrition.data.target.calories} KCAL</h2><p>{nutrition.data.totals.proteinGrams} / {nutrition.data.target.proteinGrams} g protein</p></div><ArrowRight /></Link>
    </div>
    <div className="metric-grid"><div className="metric"><strong>{plan.data.cycle.cycleNumber}</strong><span>Current training cycle</span></div><div className="metric"><strong>{nutrition.data.remaining.calories}</strong><span>Calories remaining today</span></div><div className="metric"><strong>{nutrition.data.remaining.proteinGrams} g</strong><span>Protein remaining today</span></div></div>
  </div>
}
````

## File: src/pages/client/WorkoutSplitPage.jsx
````javascript
import { Check, ChevronRight, Circle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Client.module.css'

const badgeTone = { COMPLETED: 'success', NEXT_SUGGESTED: 'warning', NOT_COMPLETED: 'neutral' }
const label = (value) => value.replaceAll('_', ' ')

export function WorkoutSplitPage() {
  const { data, loading, error, reload } = useApiData('/me/workout-plan')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">YOUR PROGRAM</p><h1>WORKOUT SPLIT</h1><p>Cycle {data.cycle.cycleNumber} · {data.cycle.completedCount} of {data.cycle.totalDays} days complete. You may record any incomplete day.</p></div></header>
    <div className={styles.workoutGrid}>{data.plan.days.map((day) => {
      const status = data.cycle.days.find((item) => item.dayNumber === day.dayNumber).status
      return <article className={`${styles.workoutDay} ${status === 'NEXT_SUGGESTED' ? styles.next : ''}`} key={day.dayNumber}>
        <header><div><p className="eyebrow">DAY {day.dayNumber}</p><h2>{day.name || `Workout Day ${day.dayNumber}`}</h2></div><StatusBadge tone={badgeTone[status]}>{label(status)}</StatusBadge></header>
        <div className={styles.exercisePreview}>{day.exercises.map((exercise) => <div key={exercise._id}><div><strong>{exercise.name}</strong><span>{exercise.targetSets && exercise.targetReps ? `${exercise.targetSets} × ${exercise.targetReps}` : 'Unmeasured'}{exercise.suggestedWeightKg != null ? ` · ${exercise.suggestedWeightKg} kg` : ''}</span></div><StatusBadge tone={data.latestProgression[exercise._id] === 'READY_TO_PROGRESS' ? 'success' : 'neutral'}>{label(data.latestProgression[exercise._id] || 'NOT_APPLICABLE')}</StatusBadge></div>)}</div>
        {status === 'COMPLETED'
          ? <Link to="/client/history" className={styles.completeAction}><Check size={19} /> Completed · View in history</Link>
          : <Link className="button button-primary button-wide" to={`/client/workout/${day.dayNumber}/record`}>{status === 'NEXT_SUGGESTED' ? 'Start suggested workout' : 'Record this workout'} <ChevronRight size={18} /></Link>}
      </article>
    })}</div>
    <div className={styles.cycleNote}><Circle size={18} /><p><strong>How cycles work:</strong> when every configured day is complete, a fresh cycle opens and Day 1 becomes the next suggestion. Day numbers are not weekdays.</p></div>
  </div>
}
````

## File: src/pages/shared/Nutrition.module.css
````css
.date { min-width: 220px; display: grid; gap: .3rem; font-size: .85rem; font-weight: 800; }
.summary { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.progress { padding: 1.3rem; border-top: 4px solid #222; background: #fff; }
.progress strong { font-size: 2rem; }
.progress strong small { color: var(--color-muted); font-size: .9rem; }
.track { height: 12px; margin: 1rem 0 .5rem; overflow: hidden; background: #ddd; }
.track span { display: block; height: 100%; background: var(--color-primary); transition: width .2s; }
.progress p:last-child { margin: 0; color: var(--color-muted); }
.progress p.over { color: var(--color-danger); font-weight: 800; }
.logHeader { display: flex; align-items: end; justify-content: space-between; gap: 1rem; }
.foodForm { display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: .8rem; border-top-color: var(--color-primary); }
.foodForm header { grid-column: 1 / -1; display: flex; justify-content: space-between; }
.foodForm header button { width: 42px; height: 42px; border: 0; background: #eee; }
.foodForm label { display: grid; gap: .3rem; font-size: .82rem; font-weight: 800; }
.foodName { grid-column: 1 / -1; }
.foodForm > div:last-child { grid-column: 1 / -1; }
.entries { display: grid; gap: .65rem; }
.foodCard { min-height: 80px; display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 1rem; padding: .9rem 1rem; border: 1px solid var(--color-border); border-left: 4px solid #222; background: #fff; }
.foodCard > div:first-child strong, .foodCard > div:first-child span { display: block; }
.foodCard > div:first-child span { color: var(--color-muted); font-size: .82rem; }
.macros { display: flex; gap: 1rem; }
.macros strong { min-width: 80px; font-size: 1.1rem; }
.macros small { display: block; color: var(--color-muted); font-size: .68rem; font-weight: 600; }
.foodActions { display: flex; gap: .3rem; }
.foodActions button { width: 38px; height: 38px; display: grid; place-items: center; border: 1px solid #ccc; background: #fff; }
@media (max-width: 700px) { .summary { grid-template-columns: 1fr; } .logHeader { align-items: stretch; flex-direction: column; } .logHeader .button { width: 100%; } .foodForm { grid-template-columns: 1fr; } .foodForm > * { grid-column: 1 !important; } .foodCard { grid-template-columns: 1fr auto; } .macros { grid-row: 2; } .foodActions { grid-column: 2; grid-row: 1 / 3; flex-direction: column; } }
````

## File: src/pages/shared/NutritionPage.jsx
````javascript
import { Edit3, Plus, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { formatDate, todayString } from '../../utils/format'
import styles from './Nutrition.module.css'

const blankEntry = (date) => ({ logDate: date, foodName: '', calories: 0, proteinGrams: 0, notes: '' })

export function NutritionPage({ role }) {
  const { clientId } = useParams()
  const [date, setDate] = useState(todayString())
  const basePath = role === 'trainer' ? `/clients/${clientId}/nutrition` : '/me/nutrition'
  const { data, loading, error, reload } = useApiData(`${basePath}?date=${date}`)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <NutritionContent role={role} data={data} date={date} setDate={setDate} reload={reload} />
}

function NutritionContent({ role, data, date, setDate, reload }) {
  const [form, setForm] = useState(null)
  const [editingId, setEditingId] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const openAdd = () => { setEditingId(''); setForm(blankEntry(date)); setError('') }
  const openEdit = (entry) => { setEditingId(entry._id); setForm({ logDate: entry.logDate, foodName: entry.foodName, calories: entry.calories, proteinGrams: entry.proteinGrams, notes: entry.notes || '' }); setError('') }
  const close = () => { setForm(null); setEditingId('') }
  const save = async (event) => {
    event.preventDefault(); setSaving(true); setError('')
    try {
      await api(editingId ? `/me/nutrition/${editingId}` : '/me/nutrition', { method: editingId ? 'PATCH' : 'POST', body: JSON.stringify(form) })
      close(); if (form.logDate !== date) setDate(form.logDate); else reload()
    } catch (requestError) { setError(requestError.message) } finally { setSaving(false) }
  }
  const remove = async (entry) => {
    if (!window.confirm(`Delete ${entry.foodName}?`)) return
    try { await api(`/me/nutrition/${entry._id}`, { method: 'DELETE' }); reload() }
    catch (requestError) { setError(requestError.message) }
  }
  const caloriePercent = Math.min(100, (data.totals.calories / data.target.calories) * 100)
  const proteinPercent = Math.min(100, (data.totals.proteinGrams / data.target.proteinGrams) * 100)
  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">DAILY NUTRITION</p><h1>{role === 'trainer' ? 'CLIENT NUTRITION LOG' : 'FUEL THE WORK'}</h1><p>{role === 'trainer' ? 'Read-only daily intake and current targets.' : 'Log any food or meal. No required meal categories.'}</p></div><label className={styles.date}>Selected date<input type="date" max={todayString()} value={date} onChange={(event) => { setDate(event.target.value); close() }} /></label></header>
    {error && <div className="alert alert-error">{error}</div>}
    <div className={styles.summary}><NutritionProgress label="Calories" consumed={data.totals.calories} target={data.target.calories} remaining={data.remaining.calories} unit="kcal" percent={caloriePercent} /><NutritionProgress label="Protein" consumed={data.totals.proteinGrams} target={data.target.proteinGrams} remaining={data.remaining.proteinGrams} unit="g" percent={proteinPercent} /></div>
    <div className={styles.logHeader}><div><p className="eyebrow">{formatDate(date).toUpperCase()}</p><h2>Food entries</h2></div>{role === 'client' && <button className="button button-primary" onClick={openAdd}><Plus size={17} /> Add food entry</button>}</div>
    {form && role === 'client' && <form className={`card ${styles.foodForm}`} onSubmit={save}><header><div><p className="eyebrow">{editingId ? 'EDIT ENTRY' : 'NEW ENTRY'}</p><h2>{editingId ? 'Update food entry' : 'What did you eat?'}</h2></div><button type="button" aria-label="Close form" onClick={close}><X /></button></header><label className={styles.foodName}>Food or meal name<input value={form.foodName} maxLength="150" required onChange={(event) => setForm({ ...form, foodName: event.target.value })} /></label><label>Date<input type="date" max={todayString()} value={form.logDate} onChange={(event) => setForm({ ...form, logDate: event.target.value })} /></label><label>Calories<input type="number" min="0" max="10000" value={form.calories} onChange={(event) => setForm({ ...form, calories: Number(event.target.value) })} /></label><label>Protein (g)<input type="number" min="0" max="1000" step="0.1" value={form.proteinGrams} onChange={(event) => setForm({ ...form, proteinGrams: Number(event.target.value) })} /></label><label className={styles.foodName}>Notes<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label><div><button className="button button-primary" disabled={saving}>{saving ? 'Saving…' : editingId ? 'Update entry' : 'Add entry'}</button></div></form>}
    {!data.entries.length ? <EmptyState title="No food entries for this date" message={role === 'client' ? 'Add your first food or meal above.' : 'This client has not logged anything for this date.'} /> : <div className={styles.entries}>{data.entries.map((entry) => <article className={styles.foodCard} key={entry._id}><div><strong>{entry.foodName}</strong><span>{entry.notes || 'No notes'}</span></div><div className={styles.macros}><strong>{entry.calories} <small>kcal</small></strong><strong>{entry.proteinGrams} <small>g protein</small></strong></div>{role === 'client' && <div className={styles.foodActions}><button aria-label={`Edit ${entry.foodName}`} onClick={() => openEdit(entry)}><Edit3 size={17} /></button><button aria-label={`Delete ${entry.foodName}`} onClick={() => remove(entry)}><Trash2 size={17} /></button></div>}</article>)}</div>}
  </div>
}

function NutritionProgress({ label, consumed, target, remaining, unit, percent }) {
  return <section className={styles.progress}><div><p className="eyebrow">{label}</p><strong>{consumed} <small>/ {target} {unit}</small></strong></div><div className={styles.track}><span style={{ width: `${percent}%` }} /></div><p className={remaining < 0 ? styles.over : ''}>{remaining >= 0 ? `${remaining} ${unit} remaining` : `${Math.abs(remaining)} ${unit} over target`}</p></section>
}
````

## File: src/pages/shared/Workout.module.css
````css
.date, .filter { min-width: 220px; display: grid; gap: .3rem; font-size: .85rem; font-weight: 800; }
.entries { display: grid; gap: 1rem; }
.exerciseEntry { display: grid; gap: 1rem; padding: clamp(1rem, 3vw, 1.5rem); border: 1px solid var(--color-border); border-top: 5px solid #222; background: #fff; }
.exerciseEntry > header { display: flex; justify-content: space-between; gap: 1rem; }
.target { text-align: right; }
.target strong, .target span { display: block; }
.target span { color: var(--color-muted); font-size: .85rem; }
.planNote { padding: .8rem; margin: 0; background: #f0f0f0; }
.sets { display: grid; gap: .5rem; }
.setRow { display: grid; grid-template-columns: 80px 1fr 1fr 44px; align-items: end; gap: .7rem; padding: .7rem; background: #f5f5f5; }
.setRow > strong { align-self: center; }
.setRow label, .notes { display: grid; gap: .25rem; font-size: .78rem; font-weight: 800; }
.setRow button { min-height: 46px; border: 1px solid #ccc; background: #fff; }
.finalSave { position: sticky; bottom: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem; color: #fff; background: #202020; box-shadow: 0 10px 40px rgb(0 0 0 / .25); }
.finalSave strong, .finalSave span { display: block; }
.finalSave span { color: #aaa; font-size: .83rem; }
.historyList { display: grid; gap: .7rem; }
.historyCard { border: 1px solid var(--color-border); background: #fff; }
.historySummary { width: 100%; min-height: 84px; display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 1rem; padding: 1rem; border: 0; border-left: 4px solid #252525; background: #fff; text-align: left; }
.historySummary div span, .historySummary > div:nth-child(2) span { display: block; color: var(--color-muted); font-size: .84rem; }
.historySummary > div:nth-child(2) { text-align: right; }
.historyDetail { display: grid; gap: 1rem; padding: 1rem; border-top: 1px solid var(--color-border); background: #f7f7f7; }
.historyDetail section { padding: 1rem; background: #fff; }
.historyDetail section > header { display: flex; justify-content: space-between; gap: 1rem; }
.historyDetail h3 { margin-bottom: .2rem; }
.historyDetail header span { color: var(--color-muted); font-size: .85rem; }
.setHistory { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .8rem; }
.setHistory span { padding: .5rem .7rem; background: #eee; font-size: .82rem; }
.setHistory strong { display: block; }
@media (max-width: 650px) { .exerciseEntry > header, .finalSave { align-items: stretch; flex-direction: column; } .target { text-align: left; } .setRow { grid-template-columns: 1fr 1fr; } .setRow > strong { grid-column: 1 / -1; } .historySummary { grid-template-columns: 1fr auto; } .historySummary > div:nth-child(2) { display: none; } }
````

## File: src/pages/shared/WorkoutHistoryPage.jsx
````javascript
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { EmptyState, ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { enumLabel, formatDate } from '../../utils/format'
import styles from './Workout.module.css'

export function WorkoutHistoryPage({ role }) {
  const { clientId } = useParams()
  const location = useLocation()
  const path = role === 'trainer' ? `/clients/${clientId}/workouts` : '/me/workouts'
  const { data, loading, error, reload } = useApiData(path)
  const [exerciseId, setExerciseId] = useState('')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const workouts = data.items
  return <HistoryContent workouts={workouts} exerciseId={exerciseId} setExerciseId={setExerciseId} success={location.state?.success} />
}

function HistoryContent({ workouts, exerciseId, setExerciseId, success }) {
  const [open, setOpen] = useState('')
  const exercises = useMemo(() => {
    const map = new Map()
    workouts.forEach((workout) => workout.exercises.forEach((exercise) => map.set(exercise.planExerciseId, exercise.exerciseName)))
    return [...map.entries()]
  }, [workouts])
  const filtered = exerciseId ? workouts.filter((workout) => workout.exercises.some((exercise) => exercise.planExerciseId === exerciseId)) : workouts
  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">PERMANENT RECORD</p><h1>WORKOUT HISTORY</h1><p>Actual dates, sets, repetitions, weights, and stored target snapshots.</p></div><label className={styles.filter}>Exercise history<select value={exerciseId} onChange={(event) => setExerciseId(event.target.value)}><option value="">All exercises</option>{exercises.map(([id, name]) => <option value={id} key={id}>{name}</option>)}</select></label></header>{success && <div className="alert alert-success">{success}</div>}
    {!filtered.length ? <EmptyState title="No completed workouts yet" message="Completed workouts will appear here permanently." /> : <div className={styles.historyList}>{filtered.map((workout) => <article className={styles.historyCard} key={workout._id}><button className={styles.historySummary} onClick={() => setOpen(open === workout._id ? '' : workout._id)}><div><strong>{formatDate(workout.completedDate)}</strong><span>Day {workout.workoutDayNumber} · {workout.workoutDayName || 'Workout'} · Cycle {workout.cycleNumber}</span></div><div><span>Revision {workout.planRevision}</span><span>Recorded by {workout.recordedByUserId?.role === 'trainer' ? 'Trainer' : 'Client'}</span></div>{open === workout._id ? <ChevronUp /> : <ChevronDown />}</button>{open === workout._id && <div className={styles.historyDetail}>{workout.exercises.filter((exercise) => !exerciseId || exercise.planExerciseId === exerciseId).map((exercise) => <section key={exercise.planExerciseId}><header><div><h3>{exercise.exerciseName}</h3><span>Target: {exercise.targetSnapshot.sets && exercise.targetSnapshot.reps ? `${exercise.targetSnapshot.sets} × ${exercise.targetSnapshot.reps}` : 'Unmeasured'}{exercise.targetSnapshot.suggestedWeightKg != null ? ` at ${exercise.targetSnapshot.suggestedWeightKg} kg` : ''}</span></div><StatusBadge tone={exercise.progressionStatus === 'READY_TO_PROGRESS' ? 'success' : exercise.progressionStatus === 'MAINTAIN' ? 'warning' : 'neutral'}>{enumLabel(exercise.progressionStatus)}</StatusBadge></header>{exercise.sets.length ? <div className={styles.setHistory}>{exercise.sets.map((set) => <span key={set.setNumber}><strong>Set {set.setNumber}</strong>{set.reps} reps · {set.weightKg} kg</span>)}</div> : <p className="muted">No measured sets.</p>}{exercise.notes && <p><strong>Result note:</strong> {exercise.notes}</p>}</section>)}</div>}</article>)}</div>}
  </div>
}
````

## File: src/pages/shared/WorkoutRecordPage.jsx
````javascript
import { Minus, Plus, Save } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { todayString } from '../../utils/format'
import styles from './Workout.module.css'

export function WorkoutRecordPage({ role }) {
  const { clientId, dayNumber } = useParams()
  const planPath = role === 'trainer' ? `/clients/${clientId}/workout-plan` : '/me/workout-plan'
  const { data, loading, error, reload } = useApiData(planPath)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const day = data.plan.days.find((item) => item.dayNumber === Number(dayNumber))
  if (!day) return <ErrorState message="Workout day not found." />
  const status = data.cycle.days.find((item) => item.dayNumber === day.dayNumber)?.status
  if (status === 'COMPLETED') return <ErrorState message="This workout day is already complete in the current cycle." />
  return <WorkoutRecordForm role={role} clientId={clientId} day={day} />
}

function WorkoutRecordForm({ role, clientId, day }) {
  const navigate = useNavigate()
  const [completedDate, setCompletedDate] = useState(todayString())
  const [results, setResults] = useState(() => day.exercises.map((exercise) => ({
    planExerciseId: exercise._id,
    sets: Array.from({ length: exercise.targetSets || 0 }, () => ({ reps: exercise.targetReps || 0, weightKg: exercise.suggestedWeightKg || 0 })),
    notes: '',
  })))
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const updateResult = (exerciseIndex, patch) => setResults((current) => current.map((result, index) => index === exerciseIndex ? { ...result, ...patch } : result))
  const updateSet = (exerciseIndex, setIndex, patch) => updateResult(exerciseIndex, { sets: results[exerciseIndex].sets.map((set, index) => index === setIndex ? { ...set, ...patch } : set) })

  const submit = async () => {
    if (!window.confirm('Save this completed workout? You cannot edit or delete it after it is saved.')) return
    setSaving(true); setError('')
    const path = role === 'trainer' ? `/clients/${clientId}/workouts` : '/me/workouts'
    try {
      await api(path, { method: 'POST', body: JSON.stringify({ workoutDayNumber: day.dayNumber, completedDate, exercises: results }) })
      navigate(role === 'trainer' ? `/trainer/clients/${clientId}/history` : '/client/history', { replace: true, state: { success: 'Workout saved permanently.' } })
    } catch (requestError) { setError(requestError.message) }
    finally { setSaving(false) }
  }

  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">CYCLE WORKOUT</p><h1>DAY {day.dayNumber} · {day.name || 'WORKOUT'}</h1><p>Record what actually happened. Missing targets or fewer sets are accepted.</p></div><label className={styles.date}>Completion date<input type="date" max={todayString()} value={completedDate} onChange={(event) => setCompletedDate(event.target.value)} /></label></header>{error && <div className="alert alert-error">{error}</div>}
    <div className={styles.entries}>{day.exercises.map((exercise, exerciseIndex) => <article className={styles.exerciseEntry} key={exercise._id}><header><div><p className="eyebrow">EXERCISE {exerciseIndex + 1}</p><h2>{exercise.name}</h2></div><div className={styles.target}><strong>{exercise.targetSets && exercise.targetReps ? `${exercise.targetSets} × ${exercise.targetReps}` : 'Unmeasured'}</strong><span>{exercise.suggestedWeightKg != null ? `${exercise.suggestedWeightKg} kg suggested` : 'No weight target'}</span></div></header>{exercise.notes && <p className={styles.planNote}><strong>Plan note:</strong> {exercise.notes}</p>}
      <div className={styles.sets}>{results[exerciseIndex].sets.map((set, setIndex) => <div className={styles.setRow} key={setIndex}><strong>SET {setIndex + 1}</strong><label>Reps<input inputMode="numeric" type="number" min="0" value={set.reps} onChange={(event) => updateSet(exerciseIndex, setIndex, { reps: Number(event.target.value) })} /></label><label>Weight (kg)<input inputMode="decimal" type="number" min="0" step="0.5" value={set.weightKg} onChange={(event) => updateSet(exerciseIndex, setIndex, { weightKg: Number(event.target.value) })} /></label><button aria-label="Remove set" type="button" onClick={() => updateResult(exerciseIndex, { sets: results[exerciseIndex].sets.filter((_, index) => index !== setIndex) })}><Minus size={18} /></button></div>)}</div>
      <button type="button" className="button button-secondary" onClick={() => updateResult(exerciseIndex, { sets: [...results[exerciseIndex].sets, { reps: exercise.targetReps || 0, weightKg: exercise.suggestedWeightKg || 0 }] })}><Plus size={17} /> Add set</button><label className={styles.notes}>Result notes<textarea value={results[exerciseIndex].notes} onChange={(event) => updateResult(exerciseIndex, { notes: event.target.value })} placeholder="How did this exercise feel?" /></label>
    </article>)}</div>
    <div className={styles.finalSave}><div><strong>Final save</strong><span>This completed workout cannot be edited or deleted.</span></div><button className="button button-primary" onClick={submit} disabled={saving}><Save size={18} /> {saving ? 'Saving…' : 'Save completed workout'}</button></div>
  </div>
}
````

## File: src/pages/trainer/AddClientPage.jsx
````javascript
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api/http'
import { WorkoutPlanEditor, blankDay } from '../../components/workout/WorkoutPlanEditor'
import styles from './Trainer.module.css'

const steps = ['Account', 'Fitness profile', 'Nutrition targets', 'Workout plan', 'Review']
const initial = {
  account: { name: '', email: '', password: '', confirmPassword: '' },
  fitnessProfile: { age: 30, heightCm: 175, weightKg: 75, biologicalSex: 'male', activityLevel: 'moderate', goal: 'maintain' },
  nutritionTarget: { calories: 2400, proteinGrams: 150 },
  workoutPlan: { days: [blankDay(1), blankDay(2), blankDay(3)] },
}

export function AddClientPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initial)
  const [estimates, setEstimates] = useState(null)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const setSection = (section, patch) => setForm((current) => ({ ...current, [section]: { ...current[section], ...patch } }))

  const validateStep = () => {
    if (step === 0 && (!form.account.name || !form.account.email || form.account.password.length < 8)) return 'Complete the account fields. Password must be at least 8 characters.'
    if (step === 0 && form.account.password !== form.account.confirmPassword) return 'Passwords do not match.'
    if (step === 3 && form.workoutPlan.days.some((day) => !day.exercises.length || day.exercises.some((exercise) => !exercise.name))) return 'Every workout day needs at least one named exercise.'
    return ''
  }

  const next = async () => {
    const issue = validateStep(); setError(issue)
    if (issue) return
    if (step === 1) {
      try {
        const { age, heightCm, weightKg, biologicalSex, activityLevel } = form.fitnessProfile
        const inputs = { age, heightCm, weightKg, biologicalSex, activityLevel }
        setEstimates(await api('/calculations/tdee', { method: 'POST', body: JSON.stringify(inputs) }))
      } catch (requestError) { setError(requestError.message); return }
    }
    setStep((current) => Math.min(4, current + 1))
  }

  const create = async () => {
    setSubmitting(true); setError('')
    try {
      const payload = { ...form, account: { name: form.account.name, email: form.account.email, password: form.account.password } }
      const result = await api('/clients', { method: 'POST', body: JSON.stringify(payload) })
      navigate(`/trainer/clients/${result.client.id}`, { replace: true, state: { success: 'Client created successfully.' } })
    } catch (requestError) { setError(requestError.message) }
    finally { setSubmitting(false) }
  }

  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">NEW CLIENT</p><h1>BUILD THEIR PLAN</h1><p>Create the account, set targets, and prescribe the initial split in one flow.</p></div></header>
    <div className={styles.steps}>{steps.map((label, index) => <div key={label} className={`${styles.step} ${index === step ? styles.stepActive : ''}`}><span>{index < step ? <Check size={15} /> : index + 1}</span><strong>{label}</strong></div>)}</div>
    {error && <div className="alert alert-error" role="alert">{error}</div>}
    <section className={`card ${styles.wizard}`}>
      {step === 0 && <><div><p className="eyebrow">STEP 1</p><h2>Account details</h2></div><div className={styles.fieldGrid}><label>Client name<input value={form.account.name} onChange={(event) => setSection('account', { name: event.target.value })} /></label><label>Client email<input type="email" value={form.account.email} onChange={(event) => setSection('account', { email: event.target.value })} /></label><label>Initial password<input type="password" minLength="8" value={form.account.password} onChange={(event) => setSection('account', { password: event.target.value })} /></label><label>Confirm password<input type="password" value={form.account.confirmPassword} onChange={(event) => setSection('account', { confirmPassword: event.target.value })} /></label></div></>}
      {step === 1 && <><div><p className="eyebrow">STEP 2</p><h2>Fitness profile</h2><p className="muted">Biological sex is used only for the Mifflin-St Jeor calorie estimate.</p></div><div className={styles.fieldGrid}><NumberField label="Age" value={form.fitnessProfile.age} onChange={(age) => setSection('fitnessProfile', { age })} /><NumberField label="Height (cm)" value={form.fitnessProfile.heightCm} onChange={(heightCm) => setSection('fitnessProfile', { heightCm })} /><NumberField label="Weight (kg)" value={form.fitnessProfile.weightKg} onChange={(weightKg) => setSection('fitnessProfile', { weightKg })} /><label>Biological sex<select value={form.fitnessProfile.biologicalSex} onChange={(event) => setSection('fitnessProfile', { biologicalSex: event.target.value })}><option value="male">Male</option><option value="female">Female</option></select></label><label>Activity level<select value={form.fitnessProfile.activityLevel} onChange={(event) => setSection('fitnessProfile', { activityLevel: event.target.value })}><option value="sedentary">Sedentary</option><option value="light">Light</option><option value="moderate">Moderate</option><option value="very_active">Very active</option><option value="extra_active">Extra active</option></select></label><label>Fitness goal<select value={form.fitnessProfile.goal} onChange={(event) => setSection('fitnessProfile', { goal: event.target.value })}><option value="maintain">Maintain weight</option><option value="lose">Lose weight</option><option value="gain">Gain weight</option></select></label></div></>}
      {step === 2 && <><div><p className="eyebrow">STEP 3</p><h2>Nutrition targets</h2><p className="muted">Estimates are references only. Choose the actual targets for this client.</p></div>{estimates && <div className={styles.estimate}><div><strong>{estimates.bmr} kcal</strong><span>Estimated BMR</span></div><div><strong>{estimates.tdee} kcal</strong><span>Estimated maintenance (TDEE)</span></div></div>}<div className={styles.fieldGrid}><NumberField label="Daily calorie target" value={form.nutritionTarget.calories} onChange={(calories) => setSection('nutritionTarget', { calories })} /><NumberField label="Daily protein target (g)" value={form.nutritionTarget.proteinGrams} onChange={(proteinGrams) => setSection('nutritionTarget', { proteinGrams })} /></div></>}
      {step === 3 && <><div><p className="eyebrow">STEP 4</p><h2>Workout plan</h2><p className="muted">Choose 1–7 days. Day numbers describe the split, not weekdays.</p></div><WorkoutPlanEditor plan={form.workoutPlan} onChange={(workoutPlan) => setForm({ ...form, workoutPlan })} /></>}
      {step === 4 && <><div><p className="eyebrow">STEP 5</p><h2>Review and create</h2><p className="muted">The client can sign in immediately after creation.</p></div><div className={styles.reviewGrid}><section><strong>{form.account.name}</strong><span>{form.account.email}</span><span>Initial account password set</span></section><section><strong>{form.fitnessProfile.goal.replace('_', ' ')}</strong><span>{form.fitnessProfile.weightKg} kg · {form.fitnessProfile.heightCm} cm</span><span>{form.fitnessProfile.activityLevel.replace('_', ' ')}</span></section><section><strong>{form.nutritionTarget.calories} kcal / {form.nutritionTarget.proteinGrams} g</strong><span>{form.workoutPlan.days.length}-day split</span><span>{form.workoutPlan.days.reduce((total, day) => total + day.exercises.length, 0)} exercises</span></section></div>{form.workoutPlan.days.map((day) => <div key={day.dayNumber}><strong>Day {day.dayNumber}: {day.name || 'Untitled'}</strong><p className="muted">{day.exercises.map((exercise) => exercise.name).join(' · ')}</p></div>)}</>}
      <div className={styles.wizardActions}>{step > 0 ? <button type="button" className="button button-secondary" onClick={() => { setError(''); setStep(step - 1) }}><ChevronLeft size={18} /> Back</button> : <span />}{step < 4 ? <button type="button" className="button button-primary" onClick={next}>Continue <ChevronRight size={18} /></button> : <button className="button button-primary" onClick={create} disabled={submitting}>{submitting ? 'Creating…' : 'Create client'}</button>}</div>
    </section>
  </div>
}

function NumberField({ label, value, onChange }) {
  return <label>{label}<input type="number" min="1" value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>
}
````

## File: src/pages/trainer/ClientDetailPage.jsx
````javascript
import { Dumbbell, History, Salad, Save, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Trainer.module.css'

export function ClientDetailPage() {
  const { clientId } = useParams()
  const { data, loading, error, reload } = useApiData(`/clients/${clientId}`, [clientId])
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <ClientDetailContent initial={data} reload={reload} />
}

function ClientDetailContent({ initial, reload }) {
  const { clientId } = useParams(); const navigate = useNavigate(); const location = useLocation()
  const [profile, setProfile] = useState({ name: initial.client.name, fitnessProfile: initial.fitnessProfile })
  const [target, setTarget] = useState(initial.nutritionTarget)
  const [status, setStatus] = useState(location.state?.success || '')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')
  const updateFitness = (patch) => setProfile((current) => ({ ...current, fitnessProfile: { ...current.fitnessProfile, ...patch } }))

  const saveProfile = async (event) => {
    event.preventDefault(); setBusy('profile'); setError('')
    try { await api(`/clients/${clientId}`, { method: 'PATCH', body: JSON.stringify(profile) }); setStatus('Profile updated.'); reload() }
    catch (requestError) { setError(requestError.message) } finally { setBusy('') }
  }
  const saveTarget = async (event) => {
    event.preventDefault(); setBusy('target'); setError('')
    try { await api(`/clients/${clientId}/nutrition-target`, { method: 'PUT', body: JSON.stringify(target) }); setStatus('Nutrition target updated.') }
    catch (requestError) { setError(requestError.message) } finally { setBusy('') }
  }
  const remove = async () => {
    if (!window.confirm('Delete this client? This removes the account, workout history, and nutrition history. This action cannot be undone.')) return
    setBusy('delete')
    try { await api(`/clients/${clientId}`, { method: 'DELETE' }); navigate('/trainer/clients', { replace: true }) }
    catch (requestError) { setError(requestError.message); setBusy('') }
  }

  return <div className="page-stack">
    <div className={styles.detailHero}><div className={styles.avatar}>{initial.client.name.slice(0, 1)}</div><div><p className="eyebrow">CLIENT PROFILE</p><h1>{initial.client.name}</h1><span>{initial.client.email}</span></div></div>
    <nav className={styles.profileNav}><Link className="button button-primary" to={`/trainer/clients/${clientId}/workout-plan`}><Dumbbell size={18} /> Workout plan</Link><Link className="button button-secondary" to={`/trainer/clients/${clientId}/history`}><History size={18} /> History</Link><Link className="button button-secondary" to={`/trainer/clients/${clientId}/nutrition`}><Salad size={18} /> Nutrition</Link></nav>
    {status && <div className="alert alert-success">{status}</div>}{error && <div className="alert alert-error">{error}</div>}
    <div className="metric-grid"><div className="metric"><strong>{initial.estimates.bmr}</strong><span>Estimated BMR (kcal)</span></div><div className="metric"><strong>{initial.estimates.tdee}</strong><span>Estimated TDEE (kcal)</span></div><div className="metric"><strong>{initial.nutritionTarget.calories}</strong><span>Daily calorie target</span></div><div className="metric"><strong>{initial.nutritionTarget.proteinGrams} g</strong><span>Daily protein target</span></div></div>
    <div className="two-column"><form className="card form-stack" onSubmit={saveProfile}><div><p className="eyebrow">PROFILE</p><h2>Fitness details</h2></div><label>Name<input value={profile.name} onChange={(event) => setProfile({ ...profile, name: event.target.value })} /></label><div className={styles.fieldGrid}><ProfileNumber label="Age" field="age" profile={profile.fitnessProfile} update={updateFitness} /><ProfileNumber label="Height (cm)" field="heightCm" profile={profile.fitnessProfile} update={updateFitness} /><ProfileNumber label="Weight (kg)" field="weightKg" profile={profile.fitnessProfile} update={updateFitness} /><label>Biological sex<select value={profile.fitnessProfile.biologicalSex} onChange={(event) => updateFitness({ biologicalSex: event.target.value })}><option value="male">Male</option><option value="female">Female</option></select></label><label>Activity level<select value={profile.fitnessProfile.activityLevel} onChange={(event) => updateFitness({ activityLevel: event.target.value })}><option value="sedentary">Sedentary</option><option value="light">Light</option><option value="moderate">Moderate</option><option value="very_active">Very active</option><option value="extra_active">Extra active</option></select></label><label>Goal<select value={profile.fitnessProfile.goal} onChange={(event) => updateFitness({ goal: event.target.value })}><option value="maintain">Maintain</option><option value="lose">Lose</option><option value="gain">Gain</option></select></label></div><button className="button button-primary" disabled={busy === 'profile'}><Save size={17} /> {busy === 'profile' ? 'Saving…' : 'Save profile'}</button></form>
      <div className="page-stack"><form className="card form-stack" onSubmit={saveTarget}><div><p className="eyebrow">TARGETS</p><h2>Nutrition prescription</h2></div><label>Daily calories<input type="number" min="1" value={target.calories} onChange={(event) => setTarget({ ...target, calories: Number(event.target.value) })} /></label><label>Daily protein (g)<input type="number" min="1" value={target.proteinGrams} onChange={(event) => setTarget({ ...target, proteinGrams: Number(event.target.value) })} /></label><button className="button button-primary" disabled={busy === 'target'}><Save size={17} /> Save targets</button></form><section className="card"><p className="eyebrow">DANGER ZONE</p><h2>Delete client</h2><p className="muted">Permanently removes the account and all associated logs.</p><button className="button button-danger" onClick={remove} disabled={busy === 'delete'}><Trash2 size={17} /> {busy === 'delete' ? 'Deleting…' : 'Delete client'}</button></section></div>
    </div>
  </div>
}

function ProfileNumber({ label, field, profile, update }) { return <label>{label}<input type="number" min="1" value={profile[field]} onChange={(event) => update({ [field]: Number(event.target.value) })} /></label> }
````

## File: src/pages/trainer/ClientsPage.jsx
````javascript
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { ClientCard } from './TrainerDashboard'
import styles from './Trainer.module.css'

export function ClientsPage() {
  const { data: clients, loading, error, reload } = useApiData('/clients')
  const [query, setQuery] = useState('')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const filtered = clients.filter((client) => `${client.name} ${client.email}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">CLIENT MANAGEMENT</p><h1>YOUR CLIENTS</h1><p>Open a profile to manage training, nutrition targets, and history.</p></div><Link className="button button-primary" to="/trainer/clients/new"><Plus size={18} /> Add client</Link></header>
    <label className={styles.search}><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search clients" aria-label="Search clients" /></label>
    {!clients.length ? <EmptyState title="No clients yet" message="Add a client to create their first plan." /> : !filtered.length ? <EmptyState title="No match" message="Try a different name or email." /> : <div className={styles.clientGrid}>{filtered.map((client) => <ClientCard client={client} key={client.id} />)}</div>}
  </div>
}
````

## File: src/pages/trainer/Trainer.module.css
````css
.sectionHead { display: flex; justify-content: space-between; align-items: end; margin-bottom: .8rem; }
.sectionHead a { display: flex; align-items: center; gap: .4rem; font-weight: 800; }
.clientGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1rem; }
.clientCard { min-height: 112px; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .9rem; padding: 1rem; border: 1px solid var(--color-border); border-left: 4px solid #222; background: #fff; transition: transform .15s, border-color .15s; }
.clientCard:hover { transform: translateY(-2px); border-left-color: var(--color-primary); }
.avatar { width: 48px; height: 48px; display: grid; place-items: center; color: #fff; background: #252525; font-size: 1.25rem; font-weight: 900; }
.clientInfo { min-width: 0; }
.clientInfo strong, .clientInfo span, .clientInfo small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.clientInfo span { color: #555; font-size: .86rem; }
.clientInfo small { margin-top: .4rem; color: var(--color-muted); text-transform: capitalize; }
.search { max-width: 520px; display: flex; align-items: center; gap: .55rem; padding-left: .8rem; border: 1px solid var(--color-border); background: #fff; }
.search input { border: 0; }
.steps { display: grid; grid-template-columns: repeat(5, 1fr); background: #222; color: #999; }
.step { min-height: 68px; display: flex; align-items: center; gap: .55rem; padding: .8rem; border-right: 1px solid #3a3a3a; }
.step span { display: grid; place-items: center; width: 26px; height: 26px; border: 1px solid currentColor; border-radius: 50%; font-size: .8rem; }
.stepActive { color: #fff; background: var(--color-primary); }
.wizard { display: grid; gap: 1rem; }
.wizardActions { display: flex; justify-content: space-between; gap: 1rem; }
.fieldGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.fieldGrid label { display: grid; gap: .35rem; font-size: .88rem; font-weight: 700; }
.estimate { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; padding: 1rem; background: #191919; color: #fff; }
.estimate strong { display: block; color: #ff5963; font-size: 1.8rem; }
.reviewGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.reviewGrid section { padding: 1rem; background: #f2f2f2; }
.reviewGrid strong, .reviewGrid span { display: block; }
.reviewGrid span { margin-top: .3rem; color: #666; font-size: .87rem; }
.profileNav { display: flex; flex-wrap: wrap; gap: .6rem; }
.detailHero { display: flex; align-items: center; gap: 1rem; padding: 1.5rem; color: #fff; background: #1d1d1d; }
.detailHero .avatar { width: 64px; height: 64px; background: var(--color-primary); }
@media (max-width: 780px) { .steps { grid-template-columns: 1fr; } .step { min-height: 44px; } .fieldGrid, .reviewGrid { grid-template-columns: 1fr; } }
````

## File: src/pages/trainer/TrainerDashboard.jsx
````javascript
import { ArrowRight, Plus, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { EmptyState, ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Trainer.module.css'

export function TrainerDashboard() {
  const { user } = useAuth()
  const { data: clients, loading, error, reload } = useApiData('/clients')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">TRAINER DASHBOARD</p><h1>WELCOME, {user.name.split(' ')[0]}</h1><p>Keep every client moving forward.</p></div><Link className="button button-primary" to="/trainer/clients/new"><Plus size={18} /> Add client</Link></header>
    <div className="metric-grid"><div className="metric"><Users color="var(--color-primary)" /><strong>{clients.length}</strong><span>Assigned clients</span></div><div className="metric"><strong>{clients.filter((client) => client.latestWorkoutDate).length}</strong><span>Clients with workout history</span></div></div>
    <section><div className={styles.sectionHead}><div><p className="eyebrow">CLIENT ROSTER</p><h2>Quick access</h2></div><Link to="/trainer/clients">View all <ArrowRight size={17} /></Link></div>
      {!clients.length ? <EmptyState title="No clients yet" message="Add a client to create a workout and nutrition plan." action={<Link className="button button-primary" to="/trainer/clients/new">Add client</Link>} /> : <div className={styles.clientGrid}>{clients.slice(0, 6).map((client) => <ClientCard client={client} key={client.id} />)}</div>}
    </section>
  </div>
}

export function ClientCard({ client }) {
  return <Link className={styles.clientCard} to={`/trainer/clients/${client.id}`}><div className={styles.avatar}>{client.name.slice(0, 1)}</div><div className={styles.clientInfo}><strong>{client.name}</strong><span>{client.email}</span><small>{client.fitnessGoal?.replace('_', ' ') || 'Goal not set'} · {client.latestWorkoutDate ? `Last workout ${client.latestWorkoutDate}` : 'No workouts yet'}</small></div><ArrowRight size={20} /></Link>
}
````

## File: src/pages/AccountPage.jsx
````javascript
import { useState } from 'react'
import { api } from '../api/http'
import { useAuth } from '../auth/AuthContext'

export function AccountPage() {
  const { user, refreshCurrentUser } = useAuth()
  const [emailForm, setEmailForm] = useState({ email: user.email, currentPassword: '' })
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [busy, setBusy] = useState('')

  const changeEmail = async (event) => {
    event.preventDefault(); setBusy('email'); setStatus({ type: '', message: '' })
    try {
      await api('/me/account', { method: 'PATCH', body: JSON.stringify(emailForm) })
      await refreshCurrentUser(); setEmailForm((current) => ({ ...current, currentPassword: '' }))
      setStatus({ type: 'success', message: 'Email updated successfully.' })
    } catch (error) { setStatus({ type: 'error', message: error.message }) }
    finally { setBusy('') }
  }

  const changePassword = async (event) => {
    event.preventDefault(); setStatus({ type: '', message: '' })
    if (passwordForm.newPassword !== passwordForm.confirmPassword) return setStatus({ type: 'error', message: 'New passwords do not match.' })
    setBusy('password')
    try {
      await api('/me/password', { method: 'PUT', body: JSON.stringify({ currentPassword: passwordForm.currentPassword, newPassword: passwordForm.newPassword }) })
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setStatus({ type: 'success', message: 'Password updated successfully.' })
    } catch (error) { setStatus({ type: 'error', message: error.message }) }
    finally { setBusy('') }
  }

  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">ACCOUNT</p><h1>YOUR SETTINGS</h1><p>Keep your sign-in details current and secure.</p></div></header>
    {status.message && <div className={`alert alert-${status.type}`}>{status.message}</div>}
    <div className="two-column">
      <form className="card form-stack" onSubmit={changeEmail}><div><p className="eyebrow">EMAIL</p><h2>Change email</h2></div><label>New email<input type="email" value={emailForm.email} onChange={(event) => setEmailForm({ ...emailForm, email: event.target.value })} required /></label><label>Current password<input type="password" value={emailForm.currentPassword} onChange={(event) => setEmailForm({ ...emailForm, currentPassword: event.target.value })} required /></label><button className="button button-primary" disabled={busy === 'email'}>{busy === 'email' ? 'Saving…' : 'Update email'}</button></form>
      <form className="card form-stack" onSubmit={changePassword}><div><p className="eyebrow">PASSWORD</p><h2>Change password</h2></div><label>Current password<input type="password" value={passwordForm.currentPassword} onChange={(event) => setPasswordForm({ ...passwordForm, currentPassword: event.target.value })} required /></label><label>New password<input type="password" minLength="8" value={passwordForm.newPassword} onChange={(event) => setPasswordForm({ ...passwordForm, newPassword: event.target.value })} required /></label><label>Confirm new password<input type="password" value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm({ ...passwordForm, confirmPassword: event.target.value })} required /></label><button className="button button-primary" disabled={busy === 'password'}>{busy === 'password' ? 'Saving…' : 'Update password'}</button></form>
    </div>
  </div>
}
````

## File: src/pages/LoginPage.module.css
````css
.page { min-height: 100vh; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(420px, .85fr); color: #fff; background: #141414; }
.pitch { min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: clamp(2rem, 6vw, 5.5rem); background: radial-gradient(circle at 80% 10%, #59151b 0, transparent 30%), linear-gradient(135deg, #111 0 64%, #1f1f1f 64%); }
.brand { display: flex; align-items: center; gap: .75rem; font-size: 1.15rem; }
.brand > span { display: grid; place-items: center; width: 45px; height: 45px; background: var(--color-primary); font-weight: 950; transform: skew(-8deg); }
.brand em { display: block; color: var(--color-primary); font-size: .65rem; font-style: normal; letter-spacing: .25em; }
.kicker { color: #ff7279; font-size: .8rem; font-weight: 850; letter-spacing: .18em; }
.pitch h1 { margin: .7rem 0 1.2rem; font-size: clamp(3.1rem, 7vw, 6.8rem); line-height: .88; letter-spacing: -.055em; }
.pitch h1 span { color: var(--color-primary); }
.pitch p { max-width: 560px; color: #bbb; }
.stat { display: flex; align-items: center; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid #333; }
.stat svg { color: var(--color-primary); }
.stat strong, .stat span { display: block; }
.stat span { margin-top: .2rem; color: #999; font-size: .85rem; }
.formPanel { display: grid; place-items: center; padding: 2rem; background: #f3f3f3; color: var(--color-text); }
.form { width: min(430px, 100%); display: grid; gap: 1.15rem; padding: clamp(1.5rem, 4vw, 3rem); background: #fff; border-top: 6px solid var(--color-primary); box-shadow: 0 24px 70px rgb(0 0 0 / .16); }
.form h2 { margin: -.5rem 0; font-size: 2.4rem; }
.form label { display: grid; gap: .4rem; font-weight: 700; }
.demo { display: grid; gap: .25rem; margin-top: .5rem; padding: .9rem; background: #f4f4f4; font-size: .8rem; color: #666; }
.demo strong { color: #222; }
@media (max-width: 850px) { .page { grid-template-columns: 1fr; } .pitch { min-height: auto; gap: 3rem; padding: 2rem; } .pitch h1 { font-size: 3.3rem; } .formPanel { min-height: 520px; padding: 1rem; } }
````

## File: src/utils/format.js
````javascript
export function todayString() {
  const date = new Date()
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-')
}

export function formatDate(value) {
  if (!value) return '—'
  const [year, month, day] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(year, month - 1, day))
}

export function enumLabel(value) {
  return value?.replaceAll('_', ' ').toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase()) || ''
}
````

## File: .env.example
````
VITE_API_BASE_URL=http://localhost:3000/api
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
````

## File: vite.config.js
````javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
````

## File: src/pages/trainer/TrainerWorkoutPlanPage.jsx
````javascript
import { Save } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState } from '../../components/common/States'
import { WorkoutPlanEditor } from '../../components/workout/WorkoutPlanEditor'
import { useApiData } from '../../hooks/useApiData'

export function TrainerWorkoutPlanPage() {
  const { clientId } = useParams()
  const { data, loading, error, reload } = useApiData(`/clients/${clientId}/workout-plan`, [clientId])
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <PlanContent initial={data} clientId={clientId} reload={reload} />
}

function PlanContent({ initial, clientId, reload }) {
  const [plan, setPlan] = useState(initial.plan)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const save = async () => {
    if (!window.confirm('Save this workout plan? A new revision will start a fresh workout cycle.')) return
    setSaving(true); setError('')
    try {
      const result = await api(`/clients/${clientId}/workout-plan`, { method: 'PUT', body: JSON.stringify({ days: plan.days }) })
      setPlan(result.plan); setStatus(`Plan revision ${result.plan.revision} saved. A fresh cycle has started.`); reload()
    } catch (requestError) { setError(requestError.message) }
    finally { setSaving(false) }
  }
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">PROGRAM DESIGN</p><h1>WORKOUT PLAN</h1><p>Revision {plan.revision} · Cycle {initial.cycle.cycleNumber} · {plan.days.length} workout days</p></div><button className="button button-primary" onClick={save} disabled={saving}><Save size={18} /> {saving ? 'Saving…' : 'Save new revision'}</button></header>
    {status && <div className="alert alert-success">{status}</div>}{error && <div className="alert alert-error">{error}</div>}
    <section className="card"><p className="eyebrow">RECORD FOR CLIENT</p><h2>Current cycle</h2><div className="profile-actions">{initial.cycle.days.map((day) => day.status === 'COMPLETED' ? <span className="button button-ghost" key={day.dayNumber}>Day {day.dayNumber} · Complete</span> : <Link className="button button-secondary" key={day.dayNumber} to={`/trainer/clients/${clientId}/workout/${day.dayNumber}/record`}>Record Day {day.dayNumber}</Link>)}</div></section>
    <WorkoutPlanEditor plan={plan} onChange={setPlan} />
  </div>
}
````

## File: src/pages/LoginPage.jsx
````javascript
import { Dumbbell } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import styles from './LoginPage.module.css'

export function LoginPage() {
  const { user, loading, login, sessionMessage } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  if (!loading && user) return <Navigate to={user.role === 'trainer' ? '/trainer' : '/client'} replace />

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    if (!form.email || !form.password) return setError('Enter your email and password.')
    setSubmitting(true)
    try {
      const loggedIn = await login(form)
      const requested = location.state?.from?.pathname
      navigate(requested || (loggedIn.role === 'trainer' ? '/trainer' : '/client'), { replace: true })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.pitch}>
        <div className={styles.brand}><span>FT</span><strong>FITTRACK <em>COACH</em></strong></div>
        <div><p className={styles.kicker}>TRAIN. TRACK. PROGRESS.</p><h1>EVERY REP.<br />EVERY MEAL.<br /><span>ONE PLAN.</span></h1><p>Clear coaching, measurable progress, and no noise between you and the work.</p></div>
        <div className={styles.stat}><Dumbbell size={28} /><div><strong>Built for the gym floor</strong><span>Fast workout logging on any screen</span></div></div>
      </section>
      <section className={styles.formPanel}>
        <form className={styles.form} onSubmit={submit}>
          <p className="eyebrow">WELCOME BACK</p>
          <h2>LOG IN</h2>
          <p className="muted">Use the account created by your trainer.</p>
          {(error || sessionMessage) && <div className="alert alert-error" role="alert">{error || sessionMessage}</div>}
          <label>Email<input type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label>
          <label>Password<input type="password" autoComplete="current-password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Your password" /></label>
          <button className="button button-primary button-wide" disabled={submitting}>{submitting ? 'Logging in…' : 'Log in'}</button>
          <div className={styles.demo}><strong>Demo access</strong><span>Trainer: demo.trainer@fittrack.local · FitTrackDemo!2026</span><span>Client: alex.client@fittrack.local · ClientDemo!2026</span></div>
        </form>
      </section>
    </main>
  )
}
````

## File: src/styles/global.css
````css
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #171717;
  background: #f4f4f4;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --color-bg-dark: #171717;
  --color-surface-dark: #242424;
  --color-primary: #e52b35;
  --color-primary-hover: #c9202a;
  --color-text-light: #fff;
  --color-page: #f4f4f4;
  --color-card: #fff;
  --color-text: #171717;
  --color-muted: #6b7280;
  --color-border: #d7d7d7;
  --color-success: #15803d;
  --color-warning: #b45309;
  --color-danger: #b91c1c;
  line-height: 1.5;
}
* { box-sizing: border-box; }
html { min-width: 320px; min-height: 100%; }
body { min-width: 320px; min-height: 100vh; margin: 0; }
button, input, select, textarea { font: inherit; }
input, select, textarea { width: 100%; min-height: 46px; padding: .72rem .8rem; border: 1px solid var(--color-border); border-radius: 3px; color: var(--color-text); background: #fff; }
textarea { min-height: 96px; resize: vertical; }
input:focus, select:focus, textarea:focus, button:focus-visible, a:focus-visible { outline: 3px solid rgb(229 43 53 / .28); outline-offset: 2px; }
button { cursor: pointer; }
button:disabled { cursor: not-allowed; opacity: .6; }
a { color: inherit; text-decoration: none; }
h1, h2, h3, p { margin-top: 0; }
h1, h2, h3 { line-height: 1.06; }
h1 { margin-bottom: .5rem; font-size: clamp(2rem, 4vw, 3.6rem); letter-spacing: -.045em; text-transform: uppercase; }
h2 { margin-bottom: .6rem; font-size: 1.45rem; }
.page-stack { display: grid; gap: 1.5rem; max-width: 1280px; margin: 0 auto; }
.page-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--color-border); }
.page-header p:last-child { margin: 0; color: var(--color-muted); }
.eyebrow { margin: 0 0 .5rem; color: var(--color-primary); font-size: .75rem; font-weight: 900; letter-spacing: .16em; text-transform: uppercase; }
.muted { color: var(--color-muted); }
.card { padding: clamp(1rem, 2vw, 1.5rem); border: 1px solid var(--color-border); border-top: 4px solid #222; background: var(--color-card); box-shadow: 0 8px 24px rgb(0 0 0 / .04); }
.two-column { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; align-items: start; }
.form-stack { display: grid; gap: 1rem; }
.form-stack label { display: grid; gap: .35rem; color: #303030; font-size: .9rem; font-weight: 700; }
.button { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; gap: .5rem; width: fit-content; padding: .7rem 1.1rem; border: 1px solid transparent; border-radius: 2px; font-weight: 850; text-transform: uppercase; letter-spacing: .035em; }
.button-primary { color: #fff; background: var(--color-primary); }
.button-primary:hover { background: var(--color-primary-hover); }
.button-secondary { color: #202020; border-color: #bdbdbd; background: #fff; }
.button-danger { color: #fff; background: var(--color-danger); }
.button-ghost { color: #333; background: transparent; }
.button-wide { width: 100%; }
.alert { padding: .85rem 1rem; border-left: 4px solid; background: #fff; }
.alert-error { border-color: var(--color-danger); color: #8a1515; background: #fff1f2; }
.alert-success { border-color: var(--color-success); color: #11612e; background: #f0fdf4; }
.metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
.metric { padding: 1.25rem; border: 1px solid var(--color-border); background: #fff; }
.metric strong { display: block; font-size: 2rem; line-height: 1; }
.metric span { display: block; margin-top: .5rem; color: var(--color-muted); }
.profile-actions { display: flex; flex-wrap: wrap; gap: .55rem; }
@media (max-width: 700px) { .two-column { grid-template-columns: 1fr; } .page-header { align-items: stretch; flex-direction: column; } .page-header .button { width: 100%; } }
````

## File: src/main.jsx
````javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
.env

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#171717" />
    <meta name="description" content="FitTrack Coach workout and nutrition tracking" />
    <title>FitTrack Coach</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^1.46.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.4"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "eslint": "^10.10.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.6",
    "globals": "^17.12.0",
    "vite": "^8.3.0"
  }
}
````

## File: README.md
````markdown
# FitTrack Coach frontend

Responsive React/Vite interface for trainers and clients. It uses React Router,
native `fetch`, React context for authentication, CSS Modules, and the FitTrack
global visual system.

## Local setup

Start the backend first, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The API defaults to
`http://localhost:3000/api`; copy `.env.example` to `.env` only when you need a
different URL.

## Seeded demo accounts

Run `npm run seed` in `../backend` before signing in.

| Role | Email | Password |
|---|---|---|
| Trainer | `demo.trainer@fittrack.local` | `FitTrackDemo!2026` |
| Client | `alex.client@fittrack.local` | `ClientDemo!2026` |
| Client | `jamie.client@fittrack.local` | `ClientDemo!2026` |

## Checks

```bash
npm run lint
npm run build
```
````

## File: src/App.jsx
````javascript
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { RoleRoute } from './auth/RoleRoute'
import { AppLayout } from './layouts/AppLayout'
import { AccountPage } from './pages/AccountPage'
import { LoginPage } from './pages/LoginPage'
import { ClientDashboard } from './pages/client/ClientDashboard'
import { WorkoutSplitPage } from './pages/client/WorkoutSplitPage'
import { NutritionPage } from './pages/shared/NutritionPage'
import { WorkoutHistoryPage } from './pages/shared/WorkoutHistoryPage'
import { WorkoutRecordPage } from './pages/shared/WorkoutRecordPage'
import { AddClientPage } from './pages/trainer/AddClientPage'
import { ClientDetailPage } from './pages/trainer/ClientDetailPage'
import { ClientsPage } from './pages/trainer/ClientsPage'
import { TrainerDashboard } from './pages/trainer/TrainerDashboard'
import { TrainerWorkoutPlanPage } from './pages/trainer/TrainerWorkoutPlanPage'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleRoute role="trainer" />}>
              <Route path="/trainer" element={<AppLayout role="trainer" />}>
                <Route index element={<TrainerDashboard />} />
                <Route path="clients" element={<ClientsPage />} />
                <Route path="clients/new" element={<AddClientPage />} />
                <Route path="clients/:clientId" element={<ClientDetailPage />} />
                <Route path="clients/:clientId/workout-plan" element={<TrainerWorkoutPlanPage />} />
                <Route path="clients/:clientId/workout/:dayNumber/record" element={<WorkoutRecordPage role="trainer" />} />
                <Route path="clients/:clientId/history" element={<WorkoutHistoryPage role="trainer" />} />
                <Route path="clients/:clientId/nutrition" element={<NutritionPage role="trainer" />} />
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
            <Route element={<RoleRoute role="client" />}>
              <Route path="/client" element={<AppLayout role="client" />}>
                <Route index element={<ClientDashboard />} />
                <Route path="workout" element={<WorkoutSplitPage />} />
                <Route path="workout/:dayNumber/record" element={<WorkoutRecordPage role="client" />} />
                <Route path="history" element={<WorkoutHistoryPage role="client" />} />
                <Route path="nutrition" element={<NutritionPage role="client" />} />
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
````
`````

## File: vite.config.js
`````javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
`````

## File: src/pages/client/Client.module.css
`````css
.welcome { min-height: 150px; padding: 2rem; color: #fff; border: 0; border-left: 7px solid var(--color-primary); background: linear-gradient(120deg, #181818, #2b2b2b); }
.actionGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.actionCard { min-height: 175px; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; padding: 1.4rem; border: 1px solid var(--color-border); background: #fff; }
.actionCard:hover { border-color: var(--color-primary); }
.actionCard p { margin-bottom: 0; color: var(--color-muted); }
.actionIcon { width: 54px; height: 54px; display: grid; place-items: center; color: #fff; background: var(--color-primary); }
.overTarget { color: var(--color-danger); }
.workoutGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); gap: 1.2rem; }
.workoutDay { display: flex; flex-direction: column; min-height: 360px; padding: 1.25rem; border: 1px solid var(--color-border); border-top: 5px solid #252525; background: #fff; }
.workoutDay.next { border-top-color: var(--color-primary); box-shadow: 0 10px 30px rgb(229 43 53 / .1); }
.workoutDay > header { display: flex; justify-content: space-between; align-items: start; gap: .7rem; }
.exercisePreview { flex: 1; display: grid; align-content: start; gap: .35rem; margin: .6rem 0 1rem; }
.exercisePreview > div { display: flex; align-items: center; justify-content: space-between; gap: .5rem; padding: .7rem 0; border-bottom: 1px solid #eee; }
.exercisePreview strong, .exercisePreview span { display: block; }
.exercisePreview span { color: var(--color-muted); font-size: .83rem; }
.completeAction { min-height: 46px; display: flex; align-items: center; justify-content: center; gap: .5rem; color: var(--color-success); background: #f0fdf4; font-weight: 800; }
.workoutActions { display: grid; gap: .55rem; }
.cycleNote { display: flex; gap: .7rem; padding: 1rem; border-left: 4px solid #555; background: #e9e9e9; }
.cycleNote p { margin: 0; }
@media (max-width: 720px) { .actionGrid { grid-template-columns: 1fr; } .workoutGrid { grid-template-columns: 1fr; } .actionCard { min-height: 140px; } }
`````

## File: src/pages/client/WorkoutSplitPage.jsx
`````javascript
import { Check, ChevronRight, Circle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import styles from './Client.module.css'

const badgeTone = { COMPLETED: 'success', NEXT_SUGGESTED: 'warning', NOT_COMPLETED: 'neutral' }
const label = (value) => value.replaceAll('_', ' ')

export function WorkoutSplitPage() {
  const { data, loading, error, reload } = useApiData('/me/workout-plan')
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">YOUR PROGRAM</p><h1>WORKOUT SPLIT</h1><p>Cycle {data.cycle.cycleNumber} · {data.cycle.completedCount} of {data.cycle.totalDays} unique days complete. You may record any configured day.</p></div></header>
    <div className={styles.workoutGrid}>{data.plan.days.map((day) => {
      const status = data.cycle.days.find((item) => item.dayNumber === day.dayNumber).status
      return <article className={`${styles.workoutDay} ${status === 'NEXT_SUGGESTED' ? styles.next : ''}`} key={day.dayNumber}>
        <header><div><p className="eyebrow">DAY {day.dayNumber}</p><h2>{day.name || `Workout Day ${day.dayNumber}`}</h2></div><StatusBadge tone={badgeTone[status]}>{label(status)}</StatusBadge></header>
        <div className={styles.exercisePreview}>{day.exercises.map((exercise) => <div key={exercise._id}><div><strong>{exercise.name}</strong><span>{exercise.targetSets && exercise.targetReps ? `${exercise.targetSets} × ${exercise.targetReps}` : 'Unmeasured'}{exercise.suggestedWeightKg != null ? ` · ${exercise.suggestedWeightKg} kg` : ''}</span></div><StatusBadge tone={data.latestProgression[exercise._id] === 'READY_TO_PROGRESS' ? 'success' : 'neutral'}>{label(data.latestProgression[exercise._id] || 'NOT_APPLICABLE')}</StatusBadge></div>)}</div>
        <div className={styles.workoutActions}>
          {status === 'COMPLETED' && <Link to="/client/history" className={styles.completeAction}><Check size={19} /> View completed session</Link>}
          <Link className="button button-primary button-wide" to={`/client/workout/${day.dayNumber}/record`}>{status === 'COMPLETED' ? 'Record this workout again' : status === 'NEXT_SUGGESTED' ? 'Start suggested workout' : 'Record this workout'} <ChevronRight size={18} /></Link>
        </div>
      </article>
    })}</div>
    <div className={styles.cycleNote}><Circle size={18} /><p><strong>How cycles work:</strong> status and the next workout are recommendations only. Repeating a day creates another permanent history record without increasing the unique-day count.</p></div>
  </div>
}
`````

## File: src/pages/shared/WorkoutRecordPage.jsx
`````javascript
import { Minus, Plus, Save } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { todayString } from '../../utils/format'
import styles from './Workout.module.css'

export function WorkoutRecordPage({ role }) {
  const { clientId, dayNumber } = useParams()
  const planPath = role === 'trainer' ? `/clients/${clientId}/workout-plan` : '/me/workout-plan'
  const { data, loading, error, reload } = useApiData(planPath)
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  const day = data.plan.days.find((item) => item.dayNumber === Number(dayNumber))
  if (!day) return <ErrorState message="Workout day not found." />
  return <WorkoutRecordForm role={role} clientId={clientId} day={day} />
}

function WorkoutRecordForm({ role, clientId, day }) {
  const navigate = useNavigate()
  const [completedDate, setCompletedDate] = useState(todayString())
  const [results, setResults] = useState(() => day.exercises.map((exercise) => ({
    planExerciseId: exercise._id,
    sets: Array.from({ length: exercise.targetSets || 0 }, () => ({ reps: exercise.targetReps || 0, weightKg: exercise.suggestedWeightKg || 0 })),
    notes: '',
  })))
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const updateResult = (exerciseIndex, patch) => setResults((current) => current.map((result, index) => index === exerciseIndex ? { ...result, ...patch } : result))
  const updateSet = (exerciseIndex, setIndex, patch) => updateResult(exerciseIndex, { sets: results[exerciseIndex].sets.map((set, index) => index === setIndex ? { ...set, ...patch } : set) })

  const submit = async () => {
    if (!window.confirm('Save this completed workout? You cannot edit or delete it after it is saved.')) return
    setSaving(true); setError('')
    const path = role === 'trainer' ? `/clients/${clientId}/workouts` : '/me/workouts'
    try {
      await api(path, { method: 'POST', body: JSON.stringify({ workoutDayNumber: day.dayNumber, completedDate, exercises: results }) })
      navigate(role === 'trainer' ? `/trainer/clients/${clientId}/history` : '/client/history', { replace: true, state: { success: 'Workout saved permanently.' } })
    } catch (requestError) { setError(requestError.message) }
    finally { setSaving(false) }
  }

  return <div className="page-stack"><header className="page-header"><div><p className="eyebrow">CYCLE WORKOUT</p><h1>DAY {day.dayNumber} · {day.name || 'WORKOUT'}</h1><p>Record what actually happened. Missing targets or fewer sets are accepted.</p></div><label className={styles.date}>Completion date<input type="date" max={todayString()} value={completedDate} onChange={(event) => setCompletedDate(event.target.value)} /></label></header>{error && <div className="alert alert-error">{error}</div>}
    <div className={styles.entries}>{day.exercises.map((exercise, exerciseIndex) => <article className={styles.exerciseEntry} key={exercise._id}><header><div><p className="eyebrow">EXERCISE {exerciseIndex + 1}</p><h2>{exercise.name}</h2></div><div className={styles.target}><strong>{exercise.targetSets && exercise.targetReps ? `${exercise.targetSets} × ${exercise.targetReps}` : 'Unmeasured'}</strong><span>{exercise.suggestedWeightKg != null ? `${exercise.suggestedWeightKg} kg suggested` : 'No weight target'}</span></div></header>{exercise.notes && <p className={styles.planNote}><strong>Plan note:</strong> {exercise.notes}</p>}
      <div className={styles.sets}>{results[exerciseIndex].sets.map((set, setIndex) => <div className={styles.setRow} key={setIndex}><strong>SET {setIndex + 1}</strong><label>Reps<input inputMode="numeric" type="number" min="0" value={set.reps} onChange={(event) => updateSet(exerciseIndex, setIndex, { reps: Number(event.target.value) })} /></label><label>Weight (kg)<input inputMode="decimal" type="number" min="0" step="0.5" value={set.weightKg} onChange={(event) => updateSet(exerciseIndex, setIndex, { weightKg: Number(event.target.value) })} /></label><button aria-label="Remove set" type="button" onClick={() => updateResult(exerciseIndex, { sets: results[exerciseIndex].sets.filter((_, index) => index !== setIndex) })}><Minus size={18} /></button></div>)}</div>
      <button type="button" className="button button-secondary" onClick={() => updateResult(exerciseIndex, { sets: [...results[exerciseIndex].sets, { reps: exercise.targetReps || 0, weightKg: exercise.suggestedWeightKg || 0 }] })}><Plus size={17} /> Add set</button><label className={styles.notes}>Result notes<textarea value={results[exerciseIndex].notes} onChange={(event) => updateResult(exerciseIndex, { notes: event.target.value })} placeholder="How did this exercise feel?" /></label>
    </article>)}</div>
    <div className={styles.finalSave}><div><strong>Final save</strong><span>This completed workout cannot be edited or deleted.</span></div><button className="button button-primary" onClick={submit} disabled={saving}><Save size={18} /> {saving ? 'Saving…' : 'Save completed workout'}</button></div>
  </div>
}
`````

## File: src/pages/trainer/ClientDetailPage.jsx
`````javascript
import { Save, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import styles from './Trainer.module.css'

export function ClientDetailPage() {
  const { clientData, reloadClient } = useOutletContext()
  return <ClientDetailContent initial={clientData} reload={reloadClient} />
}

function ClientDetailContent({ initial, reload }) {
  const { clientId } = useParams(); const navigate = useNavigate(); const location = useLocation()
  const [profile, setProfile] = useState({ name: initial.client.name, fitnessProfile: initial.fitnessProfile })
  const [target, setTarget] = useState(initial.nutritionTarget)
  const [status, setStatus] = useState(location.state?.success || '')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')
  const updateFitness = (patch) => setProfile((current) => ({ ...current, fitnessProfile: { ...current.fitnessProfile, ...patch } }))

  const saveProfile = async (event) => {
    event.preventDefault(); setBusy('profile'); setError('')
    try { await api(`/clients/${clientId}`, { method: 'PATCH', body: JSON.stringify(profile) }); setStatus('Profile updated.'); reload() }
    catch (requestError) { setError(requestError.message) } finally { setBusy('') }
  }
  const saveTarget = async (event) => {
    event.preventDefault(); setBusy('target'); setError('')
    try { await api(`/clients/${clientId}/nutrition-target`, { method: 'PUT', body: JSON.stringify(target) }); setStatus('Nutrition target updated.') }
    catch (requestError) { setError(requestError.message) } finally { setBusy('') }
  }
  const remove = async () => {
    if (!window.confirm('Delete this client? This removes the account, workout history, and nutrition history. This action cannot be undone.')) return
    setBusy('delete')
    try { await api(`/clients/${clientId}`, { method: 'DELETE' }); navigate('/trainer/clients', { replace: true }) }
    catch (requestError) { setError(requestError.message); setBusy('') }
  }

  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">CLIENT PROFILE</p><h1>PROFILE & TARGETS</h1><p>Update fitness details and the active nutrition prescription.</p></div></header>
    {status && <div className="alert alert-success">{status}</div>}{error && <div className="alert alert-error">{error}</div>}
    <div className="metric-grid"><div className="metric"><strong>{initial.estimates.bmr}</strong><span>Estimated BMR (kcal)</span></div><div className="metric"><strong>{initial.estimates.tdee}</strong><span>Estimated TDEE (kcal)</span></div><div className="metric"><strong>{initial.nutritionTarget.calories}</strong><span>Daily calorie target</span></div><div className="metric"><strong>{initial.nutritionTarget.proteinGrams} g</strong><span>Daily protein target</span></div></div>
    <div className="two-column"><form className="card form-stack" onSubmit={saveProfile}><div><p className="eyebrow">PROFILE</p><h2>Fitness details</h2></div><label>Name<input value={profile.name} onChange={(event) => setProfile({ ...profile, name: event.target.value })} /></label><div className={styles.fieldGrid}><ProfileNumber label="Age" field="age" profile={profile.fitnessProfile} update={updateFitness} /><ProfileNumber label="Height (cm)" field="heightCm" profile={profile.fitnessProfile} update={updateFitness} /><ProfileNumber label="Weight (kg)" field="weightKg" profile={profile.fitnessProfile} update={updateFitness} /><label>Biological sex<select value={profile.fitnessProfile.biologicalSex} onChange={(event) => updateFitness({ biologicalSex: event.target.value })}><option value="male">Male</option><option value="female">Female</option></select></label><label>Activity level<select value={profile.fitnessProfile.activityLevel} onChange={(event) => updateFitness({ activityLevel: event.target.value })}><option value="sedentary">Sedentary</option><option value="light">Light</option><option value="moderate">Moderate</option><option value="very_active">Very active</option><option value="extra_active">Extra active</option></select></label><label>Goal<select value={profile.fitnessProfile.goal} onChange={(event) => updateFitness({ goal: event.target.value })}><option value="maintain">Maintain</option><option value="lose">Lose</option><option value="gain">Gain</option></select></label></div><button className="button button-primary" disabled={busy === 'profile'}><Save size={17} /> {busy === 'profile' ? 'Saving…' : 'Save profile'}</button></form>
      <div className="page-stack"><form className="card form-stack" onSubmit={saveTarget}><div><p className="eyebrow">TARGETS</p><h2>Nutrition prescription</h2></div><label>Daily calories<input type="number" min="1" value={target.calories} onChange={(event) => setTarget({ ...target, calories: Number(event.target.value) })} /></label><label>Daily protein (g)<input type="number" min="1" value={target.proteinGrams} onChange={(event) => setTarget({ ...target, proteinGrams: Number(event.target.value) })} /></label><button className="button button-primary" disabled={busy === 'target'}><Save size={17} /> Save targets</button></form><section className="card"><p className="eyebrow">DANGER ZONE</p><h2>Delete client</h2><p className="muted">Permanently removes the account and all associated logs.</p><button className="button button-danger" onClick={remove} disabled={busy === 'delete'}><Trash2 size={17} /> {busy === 'delete' ? 'Deleting…' : 'Delete client'}</button></section></div>
    </div>
  </div>
}

function ProfileNumber({ label, field, profile, update }) { return <label>{label}<input type="number" min="1" value={profile[field]} onChange={(event) => update({ [field]: Number(event.target.value) })} /></label> }
`````

## File: src/pages/trainer/Trainer.module.css
`````css
.sectionHead { display: flex; justify-content: space-between; align-items: end; margin-bottom: .8rem; }
.sectionHead a { display: flex; align-items: center; gap: .4rem; font-weight: 800; }
.clientGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1rem; }
.clientCard { min-height: 112px; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .9rem; padding: 1rem; border: 1px solid var(--color-border); border-left: 4px solid #222; background: #fff; transition: transform .15s, border-color .15s; }
.clientCard:hover { transform: translateY(-2px); border-left-color: var(--color-primary); }
.avatar { width: 48px; height: 48px; display: grid; place-items: center; color: #fff; background: #252525; font-size: 1.25rem; font-weight: 900; }
.clientInfo { min-width: 0; }
.clientInfo strong, .clientInfo span, .clientInfo small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.clientInfo span { color: #555; font-size: .86rem; }
.clientInfo small { margin-top: .4rem; color: var(--color-muted); text-transform: capitalize; }
.search { max-width: 520px; display: flex; align-items: center; gap: .55rem; padding-left: .8rem; border: 1px solid var(--color-border); background: #fff; }
.search input { border: 0; }
.steps { display: grid; grid-template-columns: repeat(5, 1fr); background: #222; color: #999; }
.step { min-height: 68px; display: flex; align-items: center; gap: .55rem; padding: .8rem; border-right: 1px solid #3a3a3a; }
.step span { display: grid; place-items: center; width: 26px; height: 26px; border: 1px solid currentColor; border-radius: 50%; font-size: .8rem; }
.stepActive { color: #fff; background: var(--color-primary); }
.wizard { display: grid; gap: 1rem; }
.wizardActions { display: flex; justify-content: space-between; gap: 1rem; }
.fieldGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.fieldGrid label { display: grid; gap: .35rem; font-size: .88rem; font-weight: 700; }
.estimate { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; padding: 1rem; background: #191919; color: #fff; }
.estimate strong { display: block; color: #ff5963; font-size: 1.8rem; }
.reviewGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.reviewGrid section { padding: 1rem; background: #f2f2f2; }
.reviewGrid strong, .reviewGrid span { display: block; }
.reviewGrid span { margin-top: .3rem; color: #666; font-size: .87rem; }
.profileNav { display: flex; flex-wrap: wrap; gap: .6rem; }
.detailHero { display: flex; align-items: center; gap: 1rem; padding: 1.5rem; color: #fff; background: #1d1d1d; }
.detailHero .avatar { width: 64px; height: 64px; background: var(--color-primary); }
.recordDayGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: .7rem; margin-top: 1rem; }
.recordDay { display: grid; gap: .8rem; padding: .9rem; border: 1px solid var(--color-border); background: #f6f6f6; }
.recordDay > div { display: flex; align-items: center; justify-content: space-between; gap: .6rem; }
.recordDay .button { width: 100%; }
@media (max-width: 780px) { .steps { grid-template-columns: 1fr; } .step { min-height: 44px; } .fieldGrid, .reviewGrid { grid-template-columns: 1fr; } }
`````

## File: src/pages/LoginPage.jsx
`````javascript
import { Dumbbell } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import styles from './LoginPage.module.css'

export function LoginPage() {
  const { user, loading, login, sessionMessage } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  if (!loading && user) return <Navigate to={user.role === 'trainer' ? '/trainer' : '/client'} replace />

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    if (!form.email || !form.password) return setError('Enter your email and password.')
    setSubmitting(true)
    try {
      const loggedIn = await login(form)
      const requested = location.state?.from?.pathname
      navigate(requested || (loggedIn.role === 'trainer' ? '/trainer' : '/client'), { replace: true })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.pitch}>
        <div className={styles.brand}><span>FT</span><strong>FITTRACK <em>COACH</em></strong></div>
        <div><p className={styles.kicker}>TRAIN. TRACK. PROGRESS.</p><h1>EVERY REP.<br />EVERY MEAL.<br /><span>ONE PLAN.</span></h1><p>Clear coaching, measurable progress, and no noise between you and the work.</p></div>
        <div className={styles.stat}><Dumbbell size={28} /><div><strong>Built for the gym floor</strong><span>Fast workout logging on any screen</span></div></div>
      </section>
      <section className={styles.formPanel}>
        <form className={styles.form} onSubmit={submit}>
          <p className="eyebrow">WELCOME BACK</p>
          <h2>LOG IN</h2>
          <p className="muted">Use the account created by your trainer.</p>
          {(error || sessionMessage) && <div className="alert alert-error" role="alert">{error || sessionMessage}</div>}
          <label>Email<input type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label>
          <label>Password<input type="password" autoComplete="current-password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Your password" /></label>
          <button className="button button-primary button-wide" disabled={submitting}>{submitting ? 'Logging in…' : 'Log in'}</button>
          <div className={styles.demo}><strong>Demo access</strong><span>Trainer: demo.trainer@fittrack.local · FitTrackDemo!2026</span><span>Client: alex.client@fittrack.local · ClientDemo!2026</span></div>
        </form>
      </section>
    </main>
  )
}
`````

## File: src/styles/global.css
`````css
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #171717;
  background: #f4f4f4;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --color-bg-dark: #171717;
  --color-surface-dark: #242424;
  --color-primary: #e52b35;
  --color-primary-hover: #c9202a;
  --color-text-light: #fff;
  --color-page: #f4f4f4;
  --color-card: #fff;
  --color-text: #171717;
  --color-muted: #6b7280;
  --color-border: #d7d7d7;
  --color-success: #15803d;
  --color-warning: #b45309;
  --color-danger: #b91c1c;
  line-height: 1.5;
}
* { box-sizing: border-box; }
html { min-width: 320px; min-height: 100%; }
body { min-width: 320px; min-height: 100vh; margin: 0; }
button, input, select, textarea { font: inherit; }
input, select, textarea { width: 100%; min-height: 46px; padding: .72rem .8rem; border: 1px solid var(--color-border); border-radius: 3px; color: var(--color-text); background: #fff; }
textarea { min-height: 96px; resize: vertical; }
input:focus, select:focus, textarea:focus, button:focus-visible, a:focus-visible { outline: 3px solid rgb(229 43 53 / .28); outline-offset: 2px; }
button { cursor: pointer; }
button:disabled { cursor: not-allowed; opacity: .6; }
a { color: inherit; text-decoration: none; }
h1, h2, h3, p { margin-top: 0; }
h1, h2, h3 { line-height: 1.06; }
h1 { margin-bottom: .5rem; font-size: clamp(2rem, 4vw, 3.6rem); letter-spacing: -.045em; text-transform: uppercase; }
h2 { margin-bottom: .6rem; font-size: 1.45rem; }
.page-stack { display: grid; gap: 1.5rem; max-width: 1280px; margin: 0 auto; }
.page-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--color-border); }
.page-header p:last-child { margin: 0; color: var(--color-muted); }
.eyebrow { margin: 0 0 .5rem; color: var(--color-primary); font-size: .75rem; font-weight: 900; letter-spacing: .16em; text-transform: uppercase; }
.muted { color: var(--color-muted); }
.card { padding: clamp(1rem, 2vw, 1.5rem); border: 1px solid var(--color-border); border-top: 4px solid #222; background: var(--color-card); box-shadow: 0 8px 24px rgb(0 0 0 / .04); }
.two-column { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; align-items: start; }
.form-stack { display: grid; gap: 1rem; }
.form-stack label { display: grid; gap: .35rem; color: #303030; font-size: .9rem; font-weight: 700; }
.button { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; gap: .5rem; width: fit-content; padding: .7rem 1.1rem; border: 1px solid transparent; border-radius: 2px; font-weight: 850; text-transform: uppercase; letter-spacing: .035em; }
.button-primary { color: #fff; background: var(--color-primary); }
.button-primary:hover { background: var(--color-primary-hover); }
.button-secondary { color: #202020; border-color: #bdbdbd; background: #fff; }
.button-danger { color: #fff; background: var(--color-danger); }
.button-ghost { color: #333; background: transparent; }
.button-wide { width: 100%; }
.alert { padding: .85rem 1rem; border-left: 4px solid; background: #fff; }
.alert-error { border-color: var(--color-danger); color: #8a1515; background: #fff1f2; }
.alert-success { border-color: var(--color-success); color: #11612e; background: #f0fdf4; }
.metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
.metric { padding: 1.25rem; border: 1px solid var(--color-border); background: #fff; }
.metric strong { display: block; font-size: 2rem; line-height: 1; }
.metric span { display: block; margin-top: .5rem; color: var(--color-muted); }
.profile-actions { display: flex; flex-wrap: wrap; gap: .55rem; }
@media (max-width: 700px) { .two-column { grid-template-columns: 1fr; } .page-header { align-items: stretch; flex-direction: column; } .page-header .button { width: 100%; } }
`````

## File: src/utils/format.js
`````javascript
export function todayString() {
  const date = new Date()
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-')
}

export function formatDate(value) {
  if (!value) return '—'
  const [year, month, day] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(year, month - 1, day))
}

export function enumLabel(value) {
  return value?.replaceAll('_', ' ').toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase()) || ''
}

export function targetBalance(remaining) {
  const over = remaining < 0
  return {
    over,
    display: over ? `+${Math.abs(remaining)}` : remaining,
  }
}
`````

## File: src/main.jsx
`````javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`````

## File: .gitignore
`````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local
.env

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`````

## File: index.html
`````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#171717" />
    <meta name="description" content="FitTrack Coach workout and nutrition tracking" />
    <title>FitTrack Coach</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`````

## File: package.json
`````json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^1.46.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.4"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "eslint": "^10.10.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.6",
    "globals": "^17.12.0",
    "vite": "^8.3.0"
  }
}
`````

## File: src/pages/client/ClientDashboard.jsx
`````javascript
import { ArrowRight, Dumbbell, Salad } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { ErrorState, LoadingState } from '../../components/common/States'
import { useApiData } from '../../hooks/useApiData'
import { targetBalance, todayString } from '../../utils/format'
import styles from './Client.module.css'

export function ClientDashboard() {
  const { user } = useAuth()
  const plan = useApiData('/me/workout-plan')
  const nutrition = useApiData(`/me/nutrition?date=${todayString()}`)
  if (plan.loading || nutrition.loading) return <LoadingState />
  if (plan.error || nutrition.error) return <ErrorState message={plan.error || nutrition.error} onRetry={() => { plan.reload(); nutrition.reload() }} />
  const nextDay = plan.data.plan.days.find((day) => day.dayNumber === plan.data.cycle.nextSuggestedDayNumber)
  const calories = targetBalance(nutrition.data.remaining.calories)
  const protein = targetBalance(nutrition.data.remaining.proteinGrams)
  return <div className="page-stack">
    <header className={`page-header ${styles.welcome}`}><div><p className="eyebrow">TODAY'S OVERVIEW</p><h1>READY, {user.name.split(' ')[0]}?</h1><p>Stay consistent. The numbers will follow.</p></div></header>
    <div className={styles.actionGrid}>
      <Link to="/client/workout" className={styles.actionCard}><div className={styles.actionIcon}><Dumbbell /></div><div><p className="eyebrow">NEXT SUGGESTED</p><h2>{nextDay ? `DAY ${nextDay.dayNumber} · ${nextDay.name || 'WORKOUT'}` : 'NEW CYCLE READY'}</h2><p>{plan.data.cycle.completedCount} of {plan.data.cycle.totalDays} workout days complete</p></div><ArrowRight /></Link>
      <Link to="/client/nutrition" className={styles.actionCard}><div className={styles.actionIcon}><Salad /></div><div><p className="eyebrow">TODAY'S NUTRITION</p><h2>{nutrition.data.totals.calories} / {nutrition.data.target.calories} KCAL</h2><p>{nutrition.data.totals.proteinGrams} / {nutrition.data.target.proteinGrams} g protein</p></div><ArrowRight /></Link>
    </div>
    <div className="metric-grid"><div className="metric"><strong>{plan.data.cycle.cycleNumber}</strong><span>Current training cycle</span></div><div className="metric"><strong className={calories.over ? styles.overTarget : ''}>{calories.display}</strong><span>{calories.over ? 'Calories over target' : 'Calories remaining today'}</span></div><div className="metric"><strong className={protein.over ? styles.overTarget : ''}>{protein.display} g</strong><span>{protein.over ? 'Protein over target' : 'Protein remaining today'}</span></div></div>
  </div>
}
`````

## File: src/pages/trainer/TrainerWorkoutPlanPage.jsx
`````javascript
import { Save } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../api/http'
import { ErrorState, LoadingState, StatusBadge } from '../../components/common/States'
import { WorkoutPlanEditor } from '../../components/workout/WorkoutPlanEditor'
import { useApiData } from '../../hooks/useApiData'
import { enumLabel } from '../../utils/format'
import styles from './Trainer.module.css'

export function TrainerWorkoutPlanPage() {
  const { clientId } = useParams()
  const { data, loading, error, reload } = useApiData(`/clients/${clientId}/workout-plan`, [clientId])
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} onRetry={reload} />
  return <PlanContent initial={data} clientId={clientId} reload={reload} />
}

function PlanContent({ initial, clientId, reload }) {
  const [plan, setPlan] = useState(initial.plan)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const save = async () => {
    if (!window.confirm('Save this workout plan? A new revision will start a fresh workout cycle.')) return
    setSaving(true); setError('')
    try {
      const result = await api(`/clients/${clientId}/workout-plan`, { method: 'PUT', body: JSON.stringify({ days: plan.days }) })
      setPlan(result.plan); setStatus(`Plan revision ${result.plan.revision} saved. A fresh cycle has started.`); reload()
    } catch (requestError) { setError(requestError.message) }
    finally { setSaving(false) }
  }
  return <div className="page-stack">
    <header className="page-header"><div><p className="eyebrow">PROGRAM DESIGN</p><h1>COMPLETE WORKOUT SPLIT</h1><p>Revision {plan.revision} · Cycle {initial.cycle.cycleNumber} · {plan.days.length} workout days. Every day remains recordable.</p></div><button className="button button-primary" onClick={save} disabled={saving}><Save size={18} /> {saving ? 'Saving…' : 'Save new revision'}</button></header>
    {status && <div className="alert alert-success">{status}</div>}{error && <div className="alert alert-error">{error}</div>}
    <section className="card"><p className="eyebrow">RECORD FOR CLIENT</p><h2>Current cycle</h2><p className="muted">Status is informational. Select any configured day, including one already completed this cycle.</p><div className={styles.recordDayGrid}>{plan.days.map((day) => { const cycleDay = initial.cycle.days.find((item) => item.dayNumber === day.dayNumber); return <div className={styles.recordDay} key={day.dayNumber}><div><strong>Day {day.dayNumber} · {day.name || 'Workout'}</strong><StatusBadge tone={cycleDay?.status === 'COMPLETED' ? 'success' : cycleDay?.status === 'NEXT_SUGGESTED' ? 'warning' : 'neutral'}>{enumLabel(cycleDay?.status)}</StatusBadge></div><Link className="button button-secondary" to={`/trainer/clients/${clientId}/workout/${day.dayNumber}/record`}>{cycleDay?.status === 'COMPLETED' ? `Record Day ${day.dayNumber} again` : `Record Day ${day.dayNumber}`}</Link></div> })}</div></section>
    <WorkoutPlanEditor plan={plan} onChange={setPlan} />
  </div>
}
`````

## File: README.md
`````markdown
# FitTrack Coach frontend

Responsive React/Vite interface for trainers and clients. It uses React Router,
native `fetch`, React context for authentication, CSS Modules, and the FitTrack
global visual system.

## Local setup

Start the backend first, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The API defaults to
`http://localhost:3000/api`; copy `.env.example` to `.env` only when you need a
different URL.

## Seeded demo accounts

Run `npm run seed` in `../backend` before signing in.

| Role    | Email                         | Password            |
| ------- | ----------------------------- | ------------------- |
| Trainer | `demo.trainer@fittrack.local` | `FitTrackDemo!2026` |
| Client  | `alex.client@fittrack.local`  | `ClientDemo!2026`   |
| Client  | `jamie.client@fittrack.local` | `ClientDemo!2026`   |

## Checks

```bash
npm run lint
npm run build
```

# Project Overview

**FitTrack Coach** is a role-based web application designed to help fitness trainers manage their clients' workout programs and nutritional targets while allowing clients to record their own workout and nutrition progress.

The project is based on the problem of manually maintaining workout information in tables or note-taking applications. Although manual tables can record exercises, repetitions, sets, weights, and notes, they provide limited support for maintaining workout history, tracking progression, and managing multiple clients.

FitTrack Coach will provide a centralised system for workout planning, workout history, exercise progression, calorie targets, protein targets, and daily nutrition logging.

---

# Instructions

## User Roles

#### 3. User Roles

The application will contain two main roles: **Trainer** and **Client**. There will be no Administrator role within the normal application interface. Trainer accounts will instead be created separately by the system administrator.

---

##### Trainer

A trainer will be able to:

- Create and manage client accounts.
- Enter and update client fitness information.
- View estimated BMR and TDEE.
- Set calorie and protein targets.
- Create workout splits containing between 1 and 7 workout days.
- Add exercises with sets, repetitions, suggested weight, and notes.
- Edit client workout plans.
- Record workouts on behalf of clients.
- View client workout and exercise history.
- View client nutrition logs.

A trainer will only be able to access clients assigned to them.

###### Creating client

1. click on the `+ ADD CLIENT` button on the top right
2. Fill in `Client anme`, `Client email`, `Initial Password` (needs to be 8 characters long), `Confirm Password`
3. Click `CONTINUE`
4. Fill in `Age`, `Heigt` `Weight(kg)`, `Biological Sex`, `Activity Level`, `Fitness goal`
5. Click `CONTINUE`
6. `BMR` and `TDEE` are calculated using using the following **Mifflin–St Jeor equation**:

> [!NOTE]
> **_BMR and TDEE Formula_**
>
> $$
> \text{BMR} =
> \begin{cases}
> 10W + 6.25H - 5A + 5, & \text{Male} \\
> 10W + 6.25H - 5A - 161, & \text{Female}
> \end{cases}
> $$
>
> $$
> \text{TDEE} =
> AF \times
> \begin{cases}
> 10W + 6.25H - 5A + 5, & \text{Male} \\
> 10W + 6.25H - 5A - 161, & \text{Female}
> \end{cases}
> $$
>
> $AF$ stands for **activity factor**:
>
> - **Sedentary** = $1.2$
> - **Light** = $1.375$
> - **Moderate** = $1.55$
> - **Very Active** = $1.725$
> - **Extra Active** = $1.9$
>
> $W$ = weight in kilograms  
> $H$ = height in centimetres  
> $A$ = age in years
> The values for each activity levels are just estimates of how much energy one would expend on top of `BMR`

> **Note:** this calculation is just an <mark>estimation</mark> of energy expenditure based on given values. The suggested value is up to the trainer to adjust according to each clients goals as to precisely determine `BMR` and `TDEE` a dedicated machine would be required.

8. adjust the `Daily calorie target` and `Daily protein target (g)` if required
9. click continue
10. Specify `number of workout days` in a week a client should perform
11. Specify the exercises of each training day. **Note:** numerical fields need to be atomic, meaning only 1 value. (_i.e._ Rep: 12 not Rep: 10-12)
12. Click `Create client`

---

###### Updating Client's Information

1. Click on the `Clients` pane on the left and choose the client whose information needs to be updated
2. In profile tab append necessary changes
3. Click on `SAVE PROFILE` or `SAVE TARGETS` depending on whether `fitness details` or `Nutrition prescription` has been adjusted

####### Deleting Client

1. Click on the `Clients` pane on the left
2. Open `Profile` tab
3. Click `Delete`.

---

###### Recording Client's Workout

1. Click on the `Clients` pane on the left and choose the client whose workout is to be recorded
2. Click `Workout Plan` tab
3. Click `Record Day x` on the day for the workout to be recorded
4. Each sets of the exercises which was detailed by the trainer for the client can be recorded and adjusted in this page. Sets can be subtracted or added to the default configuration for each exercises in addition to the repetitions and weight which was used for that exercise.
5. Click `SAVE COMPLETED WORKOUT`
6. Workout can be recorded again even after saving completion

---

###### View Client's workout and Exercise history

1. Click on the `Clients` pane on the left and choose the client whose workout is to be recorded.
2. Click `History Tab`
3. All recorded workouts which which were completed are displayed in this page
4. Trainer can also see in each log the status of each exercise whether they are ready to progress or maintained.
5. Filter for specific exercise can also be applied

---

###### View client's nutrition log

1. Click on the `Clients` pane on the left and choose the client whose workout is to be recorded.
2. Click `Nutrition Tab`
3. Set `Selected date` to desired date
4. All recorded food entries which were logged by clients are displayed in this page
5. Trainer can also see the total amount of calories consumed in contrast to the target set. Similar principle is applied to protein goal

---

##### Client

A client will be able to:

- View their assigned workout split.
- Record workout performance.
- Enter actual repetitions and weight used for each set.
- View previous workout and exercise history.
- View exercise progression indicators.
- Add, edit, and delete their own nutrition entries.
- View their calorie and protein targets.
- View daily calorie and protein totals.

###### Viewing and recording assigned workout

1. Navigate to `Workout Split` by click on `Workout`
2. Click `Record Day x` on the day for the workout to be recorded
3. Each sets of the exercises which was detailed by the trainer for the client can be recorded and adjusted in this page. Sets can be subtracted or added to the default configuration for each exercises in addition to the repetitions and weight which was used for that exercise.
4. Click `SAVE COMPLETED WORKOUT`
5. Workout can be recorded again even after saving completion

---

###### Viewing exercise log

1. Click on the `HISTORY` pane on the left
2. Click `History Tab`
3. All recorded workouts which which were completed are displayed in this page
4. Client can also see in each log the status of each exercise whether they are ready to progress or maintained.
5. Filter for specific exercise can also be applied

---

###### Log Nutrition

1. Click on the `NUTRITIOn` pane on the left
2. On this page calories and protein target is displayed in contrast to their actual consumption based on logged values
3. Click `+ADD FOOD ENTRY`
4. Fill in `Food or meal name`, `Calories`, `Protein (g)` and `Note`
5. Click `ADD ENTRY` once done.

More entries can be added using `+ ADD FOOD ENTRY` button.
All logged entries will be visible for the trainer to see and the value will be compared with calories and protein goal which was set by trainer. If the the logged consumption exceed their goals an indicator appears along with the difference of the logged consumption and goal.

---

###### Updating log in credentials

1. Click on the `SETTING` pane on the left
2. Append the necessary changes and click on either `UPDATE EMAIL` or `UPDATE PASSWORD` depending which is required to be updated
`````

## File: src/App.jsx
`````javascript
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { RoleRoute } from './auth/RoleRoute'
import { NumberInputWheelGuard } from './components/common/NumberInputWheelGuard'
import { AppLayout } from './layouts/AppLayout'
import { TrainerClientLayout } from './layouts/TrainerClientLayout'
import { AccountPage } from './pages/AccountPage'
import { LoginPage } from './pages/LoginPage'
import { ClientDashboard } from './pages/client/ClientDashboard'
import { WorkoutSplitPage } from './pages/client/WorkoutSplitPage'
import { NutritionPage } from './pages/shared/NutritionPage'
import { WorkoutHistoryPage } from './pages/shared/WorkoutHistoryPage'
import { WorkoutRecordPage } from './pages/shared/WorkoutRecordPage'
import { AddClientPage } from './pages/trainer/AddClientPage'
import { ClientDetailPage } from './pages/trainer/ClientDetailPage'
import { ClientsPage } from './pages/trainer/ClientsPage'
import { TrainerDashboard } from './pages/trainer/TrainerDashboard'
import { TrainerWorkoutPlanPage } from './pages/trainer/TrainerWorkoutPlanPage'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NumberInputWheelGuard />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleRoute role="trainer" />}>
              <Route path="/trainer" element={<AppLayout role="trainer" />}>
                <Route index element={<TrainerDashboard />} />
                <Route path="clients" element={<ClientsPage />} />
                <Route path="clients/new" element={<AddClientPage />} />
                <Route path="clients/:clientId" element={<TrainerClientLayout />}>
                  <Route index element={<ClientDetailPage />} />
                  <Route path="workout-plan" element={<TrainerWorkoutPlanPage />} />
                  <Route path="workout/:dayNumber/record" element={<WorkoutRecordPage role="trainer" />} />
                  <Route path="history" element={<WorkoutHistoryPage role="trainer" />} />
                  <Route path="nutrition" element={<NutritionPage role="trainer" />} />
                </Route>
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
            <Route element={<RoleRoute role="client" />}>
              <Route path="/client" element={<AppLayout role="client" />}>
                <Route index element={<ClientDashboard />} />
                <Route path="workout" element={<WorkoutSplitPage />} />
                <Route path="workout/:dayNumber/record" element={<WorkoutRecordPage role="client" />} />
                <Route path="history" element={<WorkoutHistoryPage role="client" />} />
                <Route path="nutrition" element={<NutritionPage role="client" />} />
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
`````
