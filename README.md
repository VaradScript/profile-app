# Varadaraj Portfolio

A custom React portfolio website deployed on Vercel with the personalized domain  
https://varadaraj.online

This README explains how to customize the title, favicon (logo), and deploy updates.

------------------------------------------------------------

## 🚀 Project Setup

Install dependencies:
npm install

Run development server:
npm start

------------------------------------------------------------

## 🎨 Customize Website Title

1. Open:
public/index.html

2. Find:
<title>React App</title>

3. Replace with:
<title>Varadaraj Portfolio</title>

------------------------------------------------------------

## 🖼️ Change Website Favicon (Logo)

The favicon is the small icon in the browser tab.

Steps:
1. Create your logo (PNG/JPG).
2. Convert it to .ico using:
   https://favicon.io/favicon-converter/
3. Open folder:
   public/
4. Delete old:
   favicon.ico
5. Add your new:
   public/favicon.ico

Important:
Clear browser cache using:
CTRL + SHIFT + R
(or open the site in incognito mode)

------------------------------------------------------------

## 🌐 Deploying to Vercel

This project is linked to GitHub and auto-deploys.

To deploy changes:
git add .
git commit -m "Updated favicon and title"
git push

Vercel will automatically update the live site:
https://varadaraj.online

------------------------------------------------------------

## 🌍 Custom Domain Setup (Completed)

Registrar: GoDaddy  
Root Domain (A Record):
@ → 76.76.21.21

WWW Redirect:
www → cname.vercel-dns.com

SSL: Automatically handled by Vercel

------------------------------------------------------------

## 📁 Project Structure

### project-folder/
 ├─ public/
 │   ├─ favicon.ico      ← your custom logo
 │   ├─ index.html       ← change title here
 ├─ src/
 │   ├─ components/
 │   ├─ App.js
 │   └─ index.js
 ├─ README.md
 ├─ package.json

------------------------------------------------------------

## ✨ Features

- Fast Vercel Deployment  
- Custom Domain (varadaraj.online)  
- Custom Logo + Title  
- React App UI  
- Automatic SSL  
- Easy to maintain


