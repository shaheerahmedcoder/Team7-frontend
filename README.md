# Team 7: Notice Board Feature

## App Demo

https://github.com/user-attachments/assets/33c3b821-73b8-44f2-a279-81f9776dc61a

## App UI

![WhatsApp Image 2026-03-11 at 8 13 39 AM](https://github.com/user-attachments/assets/b1186426-b5ec-4742-9147-b523f5473b6f) ![WhatsApp Image 2026-03-11 at 8 16 53 AM](https://github.com/user-attachments/assets/9fc069b5-0793-4407-ba0d-82788662451c)

![WhatsApp Image 2026-03-11 at 8 17 46 AM](https://github.com/user-attachments/assets/84e080d4-2407-429d-9b1d-998d5b3f995c) ![WhatsApp Image 2026-03-11 at 8 18 43 AM](https://github.com/user-attachments/assets/d4a80c8b-217f-485b-9354-007d9e832c66)

---

## Project Info

| Field          | Details                        |
| -------------- | ------------------------------ |
| **University** | UBIT — University of Karachi   |
| **Department** | Department of Computer Science |
| **Course**     | Mobile App Development         |
| **Instructor** | Bilal Ahmed                    |
| **Team**       | Team 7                         |
| **Feature**    | Notice Board Screens           |

---

## Team Members

| #   | Name          | Seat No      |
| --- | ------------- | ------------ |
| 1   | Shaheer Ahmed | B23110006154 |
| 2   | Aaisha Iqbal  | B23110006001 |
| 3   | Layan Hassan  | B23110006056 |
| 4   | M Bilal Atif  | B23110006057 |
| 5   | -             | B23          |
| 6   | -             | B23          |

---

## About This Feature

The **Notice Board** is a centralized announcement and communication hub built into the Campus Connect student portal app. It allows the university to broadcast important notices to all students, and enables authorized admins to create and publish notices — all within the same mobile application.

This feature was developed by **Team 7** as part of the collaborative final project for the Mobile App Development course. The full app was divided across 6 groups, with each group responsible for a specific set of screens that were later merged into the main project.

---

## Screens Overview

### 1. Notice Board (Notice List)

The main landing screen of the Notice Board feature.

**What it does:**

- Displays a scrollable list of all published notices
- Each card shows: title, category badge, date, and preview text
- Unread notices are marked with a red dot indicator
- Filter pills to sort by: **All / Exams / Events / Academic / General**
- Search bar to find specific notices
- Floating **"+" FAB button** (at bottom-right) for admin access
- Long pressing the FAB shows **"Admin Access Only"** tooltip

---

### 2. Notice Details

Full reading view of a selected notice.

**What it does:**

- Displays full notice title, category badge, posted date and author
- Complete notice body text
- Attachment section with file name and View button
- Share floating action button
- Back navigation to Notice List

---

### 3. Admin Login

Restricted login screen for authorized admin users only.

**What it does:**

- Separate from student login — admin-only credentials
- Shows error message for wrong credentials
- Redirects to Post Notice screen on successful login
- "Sign in as Student Instead" option to switch back
- Hardcoded credentials for frontend demo (backend to be integrated later)

> **Demo Credentials:**
>
> - Email: `admin@ubit.edu.pk`
> - Password: `admin123`

---

### 4. Post Notice (Admin Only)

Form screen for admins to create and publish new notices.

**What it does:**

- Input fields: Notice Title, Category (Exam/Event/Academic/General), Notice Body
- Optional file attachment
- **Publish Notice** → adds notice to top of Notice Board list
- **Save as Draft** → returns without posting
- Admin Access Only badge for clear role indication

---

## Complete App Flow

```
STUDENT LOGIN
      ↓ (correct credentials)
HOME DASHBOARD
      ↓ (tap "Campus" in Quick Actions)
NOTICE BOARD (List)
      ├── tap any card → NOTICE DETAILS → back → NOTICE BOARD
      └── tap "+" FAB → ADMIN LOGIN
                              ↓ (correct admin credentials)
                        POST NOTICE
                              ↓ (Publish)
                        NOTICE BOARD (new notice at top)
```

---

## Navigation Map

| From           | Action                    | To                          |
| -------------- | ------------------------- | --------------------------- |
| Home Dashboard | Tap "Campus" Quick Action | Notice Board                |
| Notice Board   | Tap any notice card       | Notice Details              |
| Notice Board   | Tap "+" FAB               | Admin Login                 |
| Notice Board   | Long press "+" FAB        | Show tooltip                |
| Notice Details | Tap back                  | Notice Board                |
| Notice Board   | Tap back                  | Home Dashboard              |
| Admin Login    | Correct credentials       | Post Notice                 |
| Admin Login    | Wrong credentials         | Error message (stay)        |
| Post Notice    | Tap Publish               | Notice Board (notice added) |
| Post Notice    | Tap Save as Draft         | Notice Board (no change)    |

---

## File Structure

```
app/
├── (auth)/
│   ├── _layout.jsx
│   ├── login.jsx              ← Student login (Sir's screen)
│   └── admin-login.jsx        ← Admin login (Team 7)
│
├── (screens)/
│   ├── _layout.jsx
│   ├── home.jsx               ← Home Dashboard (Sir's screen)
│   ├── courses.jsx            ← Courses (Sir's screen)
│   ├── profile.jsx            ← Profile (Sir's screen)
│   ├── schedule.jsx           ← Schedule (Sir's screen)
│   ├── notice-board.jsx       ← Notice List (Team 7)
│   ├── notice-details.jsx     ← Notice Details (Team 7)
│   └── post-notice.jsx        ← Post Notice Admin (Team 7)
│
└── index.tsx

components/
├── dashboard/                 ← Sir's components
├── profile/                   ← Sir's components
├── notice/                    ← Team 7 components
│   ├── notice-card.jsx
│   ├── notice-badge.jsx
│   └── notice-filter.jsx
└── ui/                        ← Shared reusable components

context/
└── NoticesContext.jsx         ← Global state for notices (Team 7)
```

---

## State Management

Since there is no backend yet, notices are managed using **React Context API.**

- `NoticesContext.jsx` holds the global notices array
- Pre-loaded with 4 dummy notices on app start
- `addNotice()` function adds new admin-posted notices to the top of the list
- State resets when app is closed (expected behavior until backend is connected)

---

## Design System

| Element            | Value                  |
| ------------------ | ---------------------- |
| **Primary Color**  | Crimson Red `#8B0000`  |
| **Background**     | White `#FFFFFF`        |
| **Surface/Cards**  | White with soft shadow |
| **Text Primary**   | Dark `#1A1A1A`         |
| **Text Secondary** | Grey `#666666`         |

### Category Badge Colors

| Category | Color         |
| -------- | ------------- |
| EXAM     | Red           |
| EVENT    | Blue          |
| GENERAL  | Green         |
| ACADEMIC | Orange/Yellow |

---

## Getting Started

### Prerequisites

- Node.js installed
- Expo CLI installed
- iOS Simulator / Android Emulator or Expo Go app on phone

### Installation

```bash
# Clone or open the project
cd campus-connect

# Install dependencies
npm install

# Install Picker (if not already installed)
npx expo install @react-native-picker/picker

# Start the development server
npx expo start
```

### Running on Device

- Scan the QR code with **Expo Go** app (Android)
- Press `i` for iOS Simulator
- Press `a` for Android Emulator

---

## Future Improvements (When Backend is Added)

- Replace hardcoded admin credentials with real authentication API
- Connect Notice Board to a live database (notices persist after app close)
- Push notifications for new notices
- Admin role management (multiple admins)
- Notice edit and delete functionality
- File attachment upload to cloud storage
- Read/unread status synced across devices

---

## Notes for Team Members

> 1. Do NOT modify any of sir's existing screen files
> 2. Only add the new files listed in the file structure above
> 3. Have added the purpose of each file, commented at the top of every file related to our screens.

---
