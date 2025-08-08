# 📋 Simple React Form Template

A beginner-friendly **React** form template built to demonstrate how to handle user input and manage state efficiently.  
This project is perfect for learning the basics of **React components, useState hooks, and form handling**.

---

## 🚀 Features
- ✅ Clean and minimal UI
- ✅ Built with **React** functional components
- ✅ Uses `useState` hook for managing form state
- ✅ Fully responsive layout
- ✅ Easy to customize for your own projects

---

## 🛠️ Technologies Used
- **React** (Functional Components + Hooks)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## 📂 Screenshots
...

import cv2
import os

# Path to the uploaded video
video_path = "/mnt/data/Simple Form.mkv"

# Output screenshot path
screenshot_path = "/mnt/data/simple_form_screenshot.png"

# Capture video
cap = cv2.VideoCapture(video_path)

# Get total frames
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Select a frame from the middle
frame_number = total_frames // 2
cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)

# Read the frame
ret, frame = cap.read()

if ret:
    # Save the frame as an image
    cv2.imwrite(screenshot_path, frame)

cap.release()

screenshot_path

