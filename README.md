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
`http://localhost:3000/backend/api`; copy `.env.example` to `.env` only when you
need a different URL. Production Docker builds should pass
`VITE_API_BASE_URL=/backend/api` so browser requests stay on the public Nginx
origin.

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
