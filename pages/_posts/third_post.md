---
title: UIViewController lifecycle
layout: post
date: 2022-01-30
tags:
- Tutorial
- swift
- Ios
---

Di iOS masing-masing Anda dapat membuat tampilan menggunakan storyboard, xib atau secara terprogram.

![](https://miro.medium.com/max/700/1*PDQszjOlQArBPwb1KrWilQ.jpeg)
<div style="font-style: italic; text-align: center;" markdown="1">
  Photo by Bagus Hernawan on Unsplash
</div>

<br/>
<br/>
Terlepas dari pendekatannya, kita perlu memahami kapan tampilan dibuat, dimuat, muncul, atau dihancurkan sehingga kita dapat meningkatkan antarmuka pengguna kita.

Oleh karena itu, memahami semua metode siklus hidup tidak hanya membantu kita dalam membuat kode, tetapi juga memungkinkan kita untuk lebih kreatif dan mengimplementasikan antarmuka pengguna tingkat lanjut.

Berikut ini adalah lifecycle di dalam UIViewController:

![](https://cdn-images-1.medium.com/max/2000/1*pkR6v_dL4UESygFa9sgY9A.png)

<h1 style="font-size:1.5rem;"><b><i>loadView()</i></b></h1>

Event ini membuat tampilan yang dikelola pengontrol. Itu hanya dipanggil ketika pengontrol tampilan dibuat secara terprogram.
Anda dapat mengganti metode ini untuk membuat tampilan Anda secara manual. Jika Anda bekerja dengan storyboard atau nib file, maka Anda tidak perlu melakukan apa pun dengan metode ini dan Anda dapat mengabaikannya.

<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>loadViewIfNeeded()</i></b></h1>

Memuat tampilan pengontrol tampilan jika belum disetel. tersedia dari iOS >=9.0

<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>viewDidLoad()</i></b></h1>

Dipanggil setelah tampilan dimuat. Untuk pengontrol tampilan yang dibuat dalam kode, ini setelah -loadView. Untuk pengontrol tampilan yang tidak diarsipkan dari pena, ini setelah tampilan disetel. Gunakan metode ini untuk menginisialisasi pengaturan antarmuka

<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>viewWillAppear(_ animated: Bool)</i></b></h1>

Metode ini akan dipanggil setiap kali tampilan akan muncul, baik tampilan tersebut sudah ada di memori atau belum.

<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>viewWillLayoutSubviews()</i></b></h1>

Dipanggil tepat sebelum metode layoutSubviews view controller dipanggil.
Ini adalah langkah pertama dalam siklus hidup di mana batas diselesaikan. Jika Anda tidak menggunakan batasan atau Tata Letak Otomatis, Anda mungkin ingin memperbarui subview di sini.


<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>viewDidLayoutSubviews()</i></b></h1>

Dipanggil tepat setelah metode layoutSubviews view controller dipanggil.
Acara ini memberi tahu pengontrol tampilan bahwa subview telah disiapkan.

<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>viewDidAppear(_ animated: Bool)</i></b></h1>
Dipanggil saat tampilan telah sepenuhnya dialihkan ke layar.

<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>viewWillDisappear(_ animasi: Bool)</i></b></h1>
Metode ini akan dipanggil saat tampilan pengontrol tampilan akan dihapus dari hierarki tampilan.

<br/>
<br/>
<h1 style="font-size:1.5rem;"><b><i>viewDidDisappear(_ animated: Bool)</i></b></h1>
Metode ini akan dipanggil saat tampilan pengontrol tampilan dihapus dari hierarki tampilan.


[**UIViewController Lifecycle**
In iOS each you can create views using storyboards, xibs or programmatically.
Independent from the approach, we need???*medium.com](https://medium.com/@vipandey54/uiviewcontroller-lifecycle-7ca2d36f4f07)

