# turkay.eu – Vibe Coding Task Prompts

> Bu dosya, uzman önerilerinin site yapısına uygun filtrelenmiş halidir.
> Her task bağımsız bir Claude/AI oturumunda çalıştırılabilir prompt olarak yazılmıştır.
> Öncelik sırası: 🔴 Kritik → 🟡 Önemli → 🟢 İsteğe Bağlı

---

## PHASE 0 – STRATEJİ TEMELİ (Gün 0 – Her şeyden önce)

> ⚠️ Bu phase olmadan yazılan hero metni, paketler ve CTA'lar havada kalır.
> Framework: Doğru Kişi → Doğru Mesaj → Doğru Teklif → Doğru Kreatif → Doğru Zaman

### Task 0.1 🔴 Avatar Derinleştirme (Müşteri Profili)
```
turkay.eu stratejik çalışma. Kod yazmadan ÖNCE bu analiz yapılmalı.

Her hedef sektör için "Avatar Framework" doldur:

SEKTÖR 1: Market & Perakende Zincirleri
- Kim bu insan? → Avrupa'da 2-15 şubeli Türk market sahibi, 35-55 yaş
- En büyük acısı ne? → Excel'de batan stok/sipariş, haftalık broşür hazırlamak, WhatsApp'tan sipariş almak
- En büyük arzusu ne? → Otomatik sipariş sistemi, dijital kampanya, rakiplerle yarışma
- Şu an ne kullanıyor? → Excel, WhatsApp grupları, belki basit bir kasa yazılımı
- Neye kızıyor? → Yazılımcılara para verip sonuç alamamak, Türkçe destek bulamamak
- Geceleri ne düşünüyor? → "Müller/Billa gibi sistem kuramaz mıyız?"

SEKTÖR 2: Lojistik & Nakliye
- Kim? → Türk nakliye firması sahibi, Almanya/Avusturya hattı
- Acı? → Manuel takip, kağıt irsaliye, şoför koordinasyonu
- Arzu? → Gerçek zamanlı takip, otomatik faturalama
- Mevcut? → WhatsApp + Excel + telefon
- Öfke? → "IT firmaları bizim işi anlamıyor"
- Gece? → "Bir araç kaybolsa ne yaparım?"

SEKTÖR 3: Restoran & Kafe
- Kim? → Avrupa'da Türk restoran sahibi, 30-50 yaş
- Acı? → Online sipariş komisyonları (%30 Wolt/Lieferando), rezervasyon karmaşası
- Arzu? → Kendi sipariş sistemi, dijital menü, müşteri sadakat programı
- Mevcut? → Wolt/Glovo + kağıt menü + Instagram
- Öfke? → "Komisyonlar kârımı yiyor"
- Gece? → "Kendi uygulamamız olsa?"

SEKTÖR 4: Danışmanlık & Göçmenlik Büroları
- Kim? → Türk göçmenlik/hukuk danışmanı, 30-45 yaş
- Acı? → Dosya takibi, müşteri iletişimi, randevu kaosу
- Arzu? → CRM, otomatik hatırlatma, profesyonel web sitesi
- Mevcut? → Gmail + Google Calendar + Word belgeleri
- Öfke? → "Her müşteriyi tek tek takip edemiyorum"
- Gece? → "Bir dosyayı kaçırsam müvekkilim mağdur olur"

Bu avatar'ları src/docs/avatars.md dosyasına kaydet.
Tüm mesajlar, CTA'lar ve paketler bu acı/arzu'lardan türetilecek.
```

### Task 0.2 🔴 Core Message Formülü (Problem → Köprü → Çözüm)
```
turkay.eu: Hero ve tüm bölüm başlıkları için mesaj formülü oluştur.

YANLIŞ (mevcut): "Yazılım, Otomasyon ve AI Çözümleri"
→ Bu "ne sattığını" söylüyor. Müşteri ilgilenmez.

DOĞRU formül: Problem → Köprü → Çözüm

TR Hero önerisi:
PROBLEM: "Hâlâ Excel ve WhatsApp'la mı yönetiyorsunuz?"
KÖPRÜ: "Avrupa'daki Türk işletmelerinin dijital dönüşüm ortağı"
ÇÖZÜM: "Otomasyon, özel yazılım ve AI ile işinizi 10 kat hızlandırın."

TR Hizmetler başlığı:
PROBLEM: "Tekrarlayan işler zamanınızı mı çalıyor?"
ÇÖZÜM: "İş süreçlerinizi otomatikleştireyim."

TR Pricing başlığı:
PROBLEM: "Yazılıma ne kadar bütçe ayırmalıyım?"
ÇÖZÜM: "Net fiyat, net sonuç."

EN Hero:
PROBLEM: "Still running your business on spreadsheets?"
KÖPRÜ: "Your digital transformation partner in Central Europe"
ÇÖZÜM: "Automate, build, and scale with AI-powered solutions."

Bu formülleri src/docs/core-messages.md dosyasına kaydet.
Task 1.1 (Hero) bu mesajları kullanarak güncellenecek.
```

### Task 0.3 🔴 Offer Stack Güçlendirme
```
turkay.eu: Task 2.1'deki 3 paketi Offer Stack Framework'üne göre güçlendir.

Güçlü teklifin 5 temeli:
1. Ana ürün ✅ (zaten var)
2. Bonus ❌ (eklenecek)
3. Garanti ❌ (eklenecek)
4. Aciliyet ❌ (eklenecek)
5. Risk azaltma ❌ (eklenecek)

Güncellenmiş paketler:

PAKET 1 – Web Sitesi (€600-€1.200)
- Bonus: "Ücretsiz 30 dk dijital strateji görüşmesi"
- Garanti: "Beğenmezseniz revizyon ücretsiz"
- Aciliyet: "Bu ay başlayan projelere SEO audit hediye"
- Risk azaltma: "%50 ön ödeme, teslimatta kalan"

PAKET 2 – Otomasyon (€800-€2.000) ⭐
- Bonus: "1 ay ücretsiz teknik destek"
- Garanti: "Çalışmazsa para iadesi"
- Aciliyet: "Aylık sadece 3 yeni proje kabul ediyorum"
- Risk azaltma: "Önce demo gösterim, beğenirseniz başlayalım"

PAKET 3 – Aylık Danışmanlık (€300-€900/ay)
- Bonus: "İlk ay acil destek hattı dahil"
- Garanti: "İlk ay memnun kalmazsan ücretsiz çıkış"
- Aciliyet: "Sınırlı kontenjan – max 5 aktif müşteri"
- Risk azaltma: "Aylık iptal serbestisi, sözleşme yok"

Bu detayları Pricing.astro'da küçük bullet'lar olarak göster.
Her paketteki "risk azaltma" öğesi sitenin en güçlü satış argümanı olacak.
```

### Task 0.4 🟡 Funnel Hiyerarşisi Planı
```
turkay.eu: Sayfa yapısını TOF/MOF/BOF funnel'ına göre planla.

TOF (Top of Funnel) – TANIŞTIRMA
Amaç: Farkındalık yaratma, güven inşası
Sayfalar:
- Blog yazıları (Task 6.1)
- Şehir SEO sayfaları (Task 4.1)
- FAQ bölümü
Mesaj: Problem farkındalığı + eğitim
CTA: "Daha fazla öğren" / "Blog'u oku"

MOF (Middle of Funnel) – İKNA
Amaç: Uzmanlık gösterme, mekanizma anlatma
Sayfalar:
- Hizmetler sayfası (detaylı)
- Proje referansları (sonuç odaklı)
- Hakkımda sayfası
Mesaj: Sosyal kanıt + mekanizma + farklılaşma
CTA: "Ücretsiz görüşme al" / "Detayları incele"

BOF (Bottom of Funnel) – SATIŞ
Amaç: Karar verdirme
Sayfalar:
- Pricing bölümü
- İletişim sayfası
Mesaj: Net teklif + aciliyet + garanti
CTA: "Hemen başla" / "Teklif al"

Her CTA'nın funnel seviyesine uygun olmasını sağla.
Ana sayfadaki akış: TOF intro → MOF kanıt → BOF teklif sıralamasında olmalı.
Bu planı src/docs/funnel-plan.md dosyasına kaydet.
```

### Task 0.5 🟡 Angle Framework – Çok Açılı Mesajlar
```
turkay.eu: Her hizmet için 6 farklı iletişim açısı hazırla.

ANGLE 1 – Sonuç Açısı
"Market sahipleri kampanya süresini %80 kısalttı."

ANGLE 2 – Acı Noktası Açısı
"Hâlâ WhatsApp'tan sipariş mi alıyorsunuz?"

ANGLE 3 – Sosyal Kanıt Açısı
"Viyana'daki 5 Türk marketi zaten geçiş yaptı."

ANGLE 4 – Karşılaştırma Açısı
"Ajans: €5.000/ay + bekleme. Ben: €800 + 2 haftada teslim."

ANGLE 5 – Hikâye Açısı
"30 yıl önce Türkiye'de yazılıma başladım. Bugün Avrupa'da..."

ANGLE 6 – Kolaylık Açısı
"Türkçe konuşun, Avrupa kalitesinde yazılım alın."

Bu açıları:
- Blog başlıklarında
- Hero varyantlarında
- CTA metinlerinde
- Şehir sayfalarında

kullan. Her açıyı src/docs/angles.md'ye kaydet.
İleride A/B test için farklı hero varyantları bu açılardan türetilecek.
```

---

## PHASE 1 – Marka & Mesaj Yenileme (Gün 1–3)

### Task 1.1 🔴 Hero Bölümü Yenileme
```
turkay.eu Astro projesi: src/components/Hero.astro dosyasını güncelle.

Mevcut durum: Jenerik "Entegre Dijital Çözümler" başlığı var, ajans gibi görünüyor.
Hedef: Senior freelance AI & yazılım danışmanı konumlandırması.

Türkçe (/tr/) için yeni hero içeriği:
- Üst badge: "Slovakya Merkezli Bağımsız Yazılım Danışmanı"
- Ana başlık: "Yazılım, Otomasyon ve AI Çözümleri"
- Alt metin: "30 yıllık mühendislik deneyimi. Avrupa'daki Türk işletmeleri için dijital dönüşüm."
- CTA 1 (primary/amber): "Ücretsiz Görüşme Al"
- CTA 2 (secondary/outline): "Hizmetlerimi İncele"

İngilizce (/) için:
- Badge: "Independent Software Consultant, Based in Slovakia"
- Başlık: "Senior AI & Software Architect"
- Alt metin: "30 years of engineering experience. Remote software and AI solutions for Central Europe."
- CTA 1: "Book a Free Call"
- CTA 2: "View Services"

Teknik:
- src/i18n/tr.json ve src/i18n/en.json dosyalarındaki hero key'lerini güncelle
- Mevcut gradient overlay ve blueprint grid pattern'ı koru
- Arka plan görseli kalsın ama overlay opacity artırılabilir
- Animasyonlar (fadeInUp, orb glow) korunsun
```

### Task 1.2 🔴 WhyChooseUs → Güven Katmanı Dönüşümü
```
turkay.eu: src/components/WhyChooseUs.astro bileşenini güncelle.

Mevcut: 4 jenerik kart (Güvenilir Sonuçlar, Hızlı Uygulama, Uçtan Uca, İnovasyon).
Sorun: Ajans dili, kişisel değil.

Yeni yapı (TR):
1. "30+ Yıl Deneyim" – "Türkiye ve Avrupa'da kurumsal projelerde kanıtlanmış mühendislik geçmişi."
2. "6 Ülke Portföyü" – "Slovakya, Türkiye, Avusturya, Çekya, Almanya ve İngiltere'de müşteriler."
3. "AI & Otomasyon Uzmanı" – "n8n, LLM entegrasyonu ve özel ML model geliştirme."
4. "Tek Muhatap" – "Ajans karmaşası yok. Direkt senior mühendisle çalışın."

Yeni yapı (EN):
1. "30+ Years Experience"
2. "6 Country Portfolio"
3. "AI & Automation Expert"
4. "Single Point of Contact"

i18n dosyalarını güncelle. SVG ikonları uygun olanlarla değiştir.
Mevcut kart tasarımını (dark card, hover border) koru.
```

### Task 1.3 🔴 Stats Güncelleme
```
turkay.eu: src/components/Stats.astro içindeki rakamları güncelle.

Mevcut: 350+ Proje, 120+ Müşteri, 15+ Yıl, %99 Zamanında
Sorun: Tek kişi freelancer için şişirilmiş görünüyor.

Yeni (TR):
- "30+" → "Yıllık Deneyim"
- "6" → "Ülke Portföyü"
- "50+" → "Tamamlanan Proje"
- "100%" → "Müşteri Memnuniyeti"

Yeni (EN):
- "30+" → "Years Experience"
- "6" → "Countries Served"
- "50+" → "Projects Delivered"
- "100%" → "Client Satisfaction"

i18n dosyalarını güncelle. Count-up animasyon ve mevcut tasarım korunsun.
```

### Task 1.4 🟡 Hizmetleri 3'e İndir
```
turkay.eu: src/content/tr-services/ klasöründe 6 hizmet var.
Çok fazla. Freelancer için 3 ana hizmet yeterli.

Kalacaklar (order güncelle):
1. yapay-zeka.md → "AI & Otomasyon" (order: 1)
   - Başlık güncelle: "AI & Otomasyon Çözümleri"
   - Features: ["Özel AI Agent Geliştirme", "n8n İş Otomasyonu", "LLM Entegrasyonu", "Tahminsel Analitik"]

2. yazilim-gelistirme.md → "Özel Yazılım Geliştirme" (order: 2)
   - Features: ["Web Uygulamaları", "Yönetim Panelleri", "API & Entegrasyon", "CRM Sistemleri"]

3. bulut-devops.md → "Bulut & Sistem Entegrasyonu" (order: 3)
   - Features: ["AWS / Azure / GCP", "Kubernetes & Docker", "CI/CD Pipeline", "Sistem Entegrasyonu"]

Silinecekler:
- is-zekasi.md
- siber-guvenlik.md
- kurumsal-entegrasyon.md

İngilizce karşılıkları (src/content/en-services/) da aynı mantıkla güncelle.
ServiceCard.astro tasarımı değişmesin.
```

---

## PHASE 2 – Dönüşüm & Fiyatlandırma (Gün 4–7)

### Task 2.1 🔴 Pricing/Paketler Bölümü Ekle
```
turkay.eu: Yeni bir src/components/Pricing.astro bileşeni oluştur.

3 paket kartı yan yana (responsive: mobile 1 col, desktop 3 col).

Paket 1 – "Web Sitesi Paketi"
- Açıklama: "Kurumsal web sitesi, SEO altyapısı dahil"
- Fiyat: "€600 – €1.200"
- Özellikler: ["5 sayfalık site", "Mobil uyumlu", "SEO optimizasyonu", "İletişim formu", "1 ay destek"]
- CTA: "Teklif Al"

Paket 2 – "Otomasyon Paketi" (öne çıkan/highlighted)
- Açıklama: "İş süreç otomasyonu, n8n kurulumu"
- Fiyat: "€800 – €2.000"
- Özellikler: ["İhtiyaç analizi", "2-3 otomasyon akışı", "n8n kurulumu", "AI entegrasyonu", "Eğitim"]
- CTA: "Teklif Al"

Paket 3 – "Aylık Danışmanlık"
- Açıklama: "Sürekli teknik destek ve geliştirme"
- Fiyat: "€300 – €900/ay"
- Özellikler: ["Aylık teknik danışmanlık", "Öncelikli destek", "Küçük geliştirmeler", "Performans izleme", "Aylık rapor"]
- CTA: "Görüşme Planla"

Tasarım:
- Mevcut tema: bg-[#111d33], border-[#1e3a5f], text amber #FFBC42
- Ortadaki kart (Otomasyon) amber border ve "Popüler" badge
- Hover efekti: border-[#FFBC42]/30
- Her kartta fiyat büyük, amber renk

İngilizce versiyonu da oluştur. i18n dosyalarını güncelle.
src/pages/tr/index.astro'da Services bölümünün hemen altına ekle.
```

### Task 2.2 🔴 Hedef Kitle Bölümü Ekle
```
turkay.eu: Yeni src/components/TargetAudience.astro bileşeni oluştur.

Amaç: "Kimler için çalışıyorum?" sorusuna cevap.
Hero'dan hemen sonra, WhyChooseUs'tan önce gelecek.

TR içeriği:
Başlık: "Kimler İçin Çalışıyorum?"
Alt metin: "Avrupa'daki Türk işletmelerine özel çözümler"

6 hedef sektör (2x3 grid):
1. 🏪 "Market & Perakende Zincirleri"
2. 🚛 "Lojistik & Nakliye Firmaları"
3. 🍽️ "Restoran & Kafe İşletmeleri"
4. 📋 "Danışmanlık & Göçmenlik Büroları"
5. 🛒 "E-Ticaret İşletmeleri"
6. 🏗️ "İnşaat & Emlak Firmaları"

EN içeriği:
Başlık: "Who I Work With"
Sektörler: Retail, Logistics, Hospitality, Consulting, E-Commerce, Construction

Tasarım: Küçük kartlar, emoji ikon, kısa açıklama.
Mevcut dark tema uyumlu.
```

### Task 2.3 🟡 İletişim Sayfası Güncelleme
```
turkay.eu: src/pages/tr/iletisim.astro dosyasını güncelle.

Eklenecekler:
1. WhatsApp butonu: +421 915 455 756 numarasıyla wa.me linki
2. Calendly/Cal.com embed veya linki (placeholder olarak "Görüşme Planla" butonu)
3. Form'a "Bütçe Aralığı" dropdown ekle: ["€500 altı", "€500-€2.000", "€2.000-€5.000", "€5.000+"]
4. Form'a "Nasıl buldunuz?" dropdown: ["Google", "LinkedIn", "Tavsiye", "Diğer"]

Form submit: Şimdilik alert göster, ileride Supabase'e bağlanacak.
Mevcut tasarım ve renk şemasını koru.
```

---

## PHASE 3 – SEO & Yapılandırılmış Veri (Gün 8–10)

### Task 3.1 🔴 Schema.org JSON-LD Ekle
```
turkay.eu: src/layouts/TrLayout.astro ve BaseLayout.astro'ya Schema.org structured data ekle.

Her sayfanın <head> bölümüne JSON-LD script ekle.

ProfessionalService schema:
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Eyüp Türkay – Yazılım & AI Danışmanlığı",
  "description": "Avrupa'daki Türk işletmeleri için yazılım, otomasyon ve AI çözümleri.",
  "url": "https://turkay.eu/tr/",
  "telephone": "+421915455756",
  "email": "info@turkay.eu",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SKY PARK Offices, Bottova 7939/2A",
    "addressLocality": "Bratislava",
    "postalCode": "811 09",
    "addressCountry": "SK"
  },
  "geo": { latitude: 48.1486, longitude: 17.1077 },
  "priceRange": "€€",
  "areaServed": ["SK", "CZ", "AT", "DE", "TR", "PL", "HU"],
  "knowsLanguage": ["tr", "en", "sk"]
}

Person schema:
{
  "@type": "Person",
  "name": "Eyüp Türkay",
  "jobTitle": "Senior AI & Software Architect",
  "worksFor": { "@type": "Organization", "name": "turkay.eu" },
  "knowsAbout": ["AI", "Machine Learning", "n8n", "Cloud Architecture"],
  "sameAs": ["https://linkedin.com/in/eyupturkay", "https://github.com/eyupturkay"]
}

Her dil için ayrı schema oluştur (TR/EN/SK).
Astro component olarak src/components/SchemaOrg.astro yap, props ile dil al.
```

### Task 3.2 🔴 Hreflang ve Meta Tag Düzenlemesi
```
turkay.eu: Tüm layout dosyalarında hreflang tag'leri ekle/düzelt.

Her sayfanın <head> bölümüne:
<link rel="alternate" hreflang="en" href="https://turkay.eu/" />
<link rel="alternate" hreflang="tr" href="https://turkay.eu/tr/" />
<link rel="alternate" hreflang="sk" href="https://turkay.eu/sk/" />
<link rel="alternate" hreflang="x-default" href="https://turkay.eu/" />

Alt sayfalar için de (örn: /tr/hizmetlerimiz ↔ /services ↔ /sk/sluzby).

BaseLayout.astro'da lang prop'a göre dinamik hreflang üret.
Open Graph ve Twitter Card meta tag'lerini de kontrol et:
- og:locale → "tr_TR", "en_US", "sk_SK"
- og:url → canonical URL
- og:image → site screenshot veya logo
```

### Task 3.3 🟡 FAQ Bölümünü AEO İçin Optimize Et
```
turkay.eu: src/content/tr-faq/ klasöründeki FAQ içeriklerini AEO (Answer Engine Optimization) için güncelle.

Mevcut FAQ'lar jenerik. AI botlarının (Perplexity, ChatGPT, Gemini) cevaplayacağı sorular ekle:

Yeni/güncellenmiş FAQ'lar:
1. "Avrupa'daki Türk işletmeleri için yazılım hizmeti veren biri var mı?"
   → Cevap: Eyüp Türkay tanıtımı, Bratislava merkezli, 30 yıl deneyim...

2. "Slovakya'da Türkçe bilen yazılımcı var mı?"
   → Cevap: Lokasyon, dil avantajı, hizmet alanları...

3. "n8n ile iş otomasyonu nasıl yapılır?"
   → Cevap: Teknik açıklama, örnek use case...

4. "Küçük işletme için web sitesi maliyeti ne kadar?"
   → Cevap: Paket fiyatları referansı...

5. "Avrupa'da AI danışmanlığı veren Türk uzman var mı?"
   → Cevap: Uzmanlık alanları, referanslar...

6. "Uzaktan yazılım geliştirme nasıl çalışır?"
   → Cevap: Metodoloji, iletişim süreci...

FAQPage schema markup'ı da ekle (JSON-LD).
Her FAQ'ın hem sorusu hem cevabı schema'da olsun.
```

---

## PHASE 4 – Şehir Bazlı SEO Sayfaları (Gün 11–14)

### Task 4.1 🟡 Şehir Landing Page Şablonu Oluştur
```
turkay.eu: Şehir bazlı SEO landing page sistemi kur.

Yeni dosya: src/pages/tr/[sehir].astro (dynamic route)
Veya statik sayfalar: src/pages/tr/viyana-turk-yazilimci.astro vb.

Content collection yaklaşımı öneriyorum:
1. src/content/tr-cities/ klasörü oluştur
2. content.config.ts'ye city schema ekle:
   - title, city, country, slug, description, keywords[], services[]

Şablon yapısı (her şehir sayfası):
- H1: "[Şehir]'daki Türk İşletmeleri İçin Yazılım Çözümleri"
- Intro paragraf (şehre özel)
- Sunulan hizmetler listesi
- CTA: "Ücretsiz Görüşme Al"
- FAQ (şehre özel 2-3 soru)
- Schema: LocalBusiness + areaServed

İlk 6 şehir sayfası:
1. viyana-turk-yazilimci.md – Viyana
2. berlin-turk-yazilimci.md – Berlin
3. bratislava-turk-yazilimci.md – Bratislava
4. prag-turk-yazilimci.md – Prag
5. munih-turk-yazilimci.md – Münih
6. zurih-turk-yazilimci.md – Zürih

Her sayfa 400-600 kelime, doğal Türkçe, anahtar kelime spam yok.
```

### Task 4.2 🟢 İngilizce Şehir Sayfaları
```
turkay.eu: İngilizce şehir bazlı SEO sayfaları oluştur.

src/content/en-cities/ klasörü:
1. bratislava-ai-developer.md
2. vienna-ai-consultant.md
3. prague-software-developer.md
4. berlin-freelance-developer.md
5. munich-ai-automation.md
6. zurich-software-architect.md

Her sayfa:
- H1: "AI & Software Development in [City]"
- 400-600 kelime İngilizce
- Hedef anahtar kelimeler: "freelance developer [city]", "AI consultant [city]"
- LocalBusiness schema
- CTA → contact page
```

---

## PHASE 5 – Sayfa Sadeleştirme (Gün 8–10)

### Task 5.1 🟡 index.astro Bölüm Sıralamasını Değiştir
```
turkay.eu: src/pages/tr/index.astro'daki bölüm sıralamasını güncelle.

Mevcut sıra (11 bölüm – çok fazla):
Hero → WhyChooseUs → Stats → Services → AITools → Methodology → Projects → Partners → FAQ → Blog → CTA

Yeni sıra (8 bölüm – daha odaklı):
1. Hero (güncellenmiş mesajla)
2. TargetAudience (YENİ – Kimler için?)
3. WhyChooseUs (güven katmanı – güncellenmiş)
4. Services (3'e indirilmiş)
5. Pricing (YENİ – 3 paket)
6. Projects (referanslar – 4'e indir)
7. FAQ (AEO optimize)
8. CTA (iletişim)

Kaldırılanlar:
- Stats → WhyChooseUs'a entegre edildi
- AITools → Ayrı sayfa olarak /tr/ai-araclarim'a taşınabilir
- Methodology → Hizmetler sayfasına taşınabilir
- Partners → Footer'a küçük logo satırı olarak taşınabilir
- Blog → Nav'da link olarak kalsın, ana sayfadan kaldır

Bu sadeleştirme "kurumsal ajans" hissini kaldırıp "senior danışman" hissi verecek.
```

### Task 5.2 🟢 Partners'ı Footer'a Taşı
```
turkay.eu: src/components/Footer.astro'ya küçük "Teknoloji Partnerleri" satırı ekle.

Mevcut Partners.astro'daki 8 partner logosu yerine,
footer'da tek satır halinde küçük gri text olarak göster:

"Teknoloji Ekosistemi: Microsoft · AWS · Google Cloud · Docker · Kubernetes"

Tasarım: text-xs text-[#94a3b8]/60, tek satır, ortalanmış.
Ana sayfadan Partners bölümünü kaldır.
```

---

## PHASE 6 – Teknik Blog & AEO İçerik (Gün 11–14)

### Task 6.1 🟡 AEO Blog Yazıları Oluştur
```
turkay.eu: src/content/tr-blog/ klasörüne AEO optimize 5 blog yazısı ekle.

Her yazı 800-1200 kelime, soru-cevap formatında, teknik ama anlaşılır.

1. turk-isletmeler-dijital-donusum.md
   - "Avrupa'daki Türk İşletmeleri İçin Dijital Dönüşüm Rehberi"

2. n8n-is-otomasyonu.md
   - "n8n ile İş Otomasyonu: Küçük İşletmeler İçin Rehber"

3. ai-neden-onemli.md
   - "2026'da Yapay Zeka Küçük İşletmeleri Nasıl Dönüştürüyor?"

4. web-sitesi-maliyeti.md
   - "Avrupa'da Kurumsal Web Sitesi Yaptırmanın Maliyeti Nedir?"

5. uzaktan-yazilim-gelistirme.md
   - "Uzaktan Yazılım Geliştirme Nasıl Çalışır? Süreç Rehberi"

Her yazıda:
- frontmatter: title, description, date, author ("Eyüp Türkay"), category, readTime
- H2 alt başlıklar soru formatında
- Net, actionable cevaplar
- Son paragrafta CTA: "Bu konuda yardıma ihtiyacınız varsa benimle iletişime geçin."
- Anahtar kelimeler doğal kullanılmış
```

---

## PHASE 7 – Görsel & UX İyileştirme (Sürekli)

### Task 7.1 🟢 Referans/Proje Kartlarını Sonuç Odaklı Yap
```
turkay.eu: src/content/tr-projects/ içindeki projeleri güncelle.

Mevcut projeler jenerik açıklamalar içeriyor.
Her projeye sonuç metriği ekle.

Örnek format:
- title: "Market Zinciri Kampanya Otomasyonu"
- description: "Haftalık broşür hazırlama süresi %80 azaldı"
- tags: ["n8n", "Otomasyon", "Perakende"]

content.config.ts'deki project schema'ya "result" field ekle.
ProjectCard.astro'da result'ı göster (küçük yeşil badge).

4-6 proje yeterli, fazlasını kaldır.
```

### Task 7.2 🟢 Footer Bio Snippet (GEO için)
```
turkay.eu: src/components/Footer.astro'daki açıklama metnini güncelle.

Mevcut: Jenerik firma açıklaması.

Yeni (TR):
"Eyüp Türkay, Slovakya merkezli, 30 yıllık deneyime sahip bağımsız yazılım danışmanıdır.
AI otomasyon, özel yazılım geliştirme ve dijital dönüşüm alanlarında
Avrupa'daki Türk işletmelerine hizmet vermektedir."

Yeni (EN):
"Eyüp Türkay is a senior software architect based in Slovakia,
with over 30 years of experience in enterprise software,
AI automation, and cross-border projects across Central Europe."

Bu metin hem kullanıcılar hem AI motorları (GEO) için kimlik tanımlayıcı.
```

---

## PHASE 8 – Çok Dilli Genişleme (Gün 15+)

### Task 8.1 🟢 Slovakça İçerik Oluştur
```
turkay.eu: /sk/ sayfalarını oluştur.

Mevcut yapıda src/pages/sk/ ve src/content/sk-* koleksiyonları zaten tanımlı.

Oluşturulacaklar:
1. src/pages/sk/index.astro – Ana sayfa (TR index.astro'nun SK versiyonu)
2. src/i18n/sk.json – Slovakça çeviriler
3. src/content/sk-services/ – 3 hizmet (TR'den çeviri)
4. src/content/sk-faq/ – 6 FAQ
5. src/content/sk-projects/ – 4 proje
6. src/layouts/SkLayout.astro – Slovakça layout (varsa güncelle, yoksa oluştur)

Slovakça içerik kaliteli olmalı, Google Translate değil.
Hedef anahtar kelimeler: "vývojár softvéru Bratislava", "AI riešenia Slovensko"
```

### Task 8.2 🟢 Almanca İçerik (Avusturya/Almanya)
```
turkay.eu: /de/ sayfalarını oluştur.

Yeni dil ekleme:
1. astro.config.mjs'ye 'de' locale ekle
2. src/pages/de/index.astro
3. src/i18n/de.json
4. src/content/de-services/, de-faq/, de-projects/
5. src/layouts/DeLayout.astro

Hedef: Viyana ve Münih'teki Türk işletmeleri + Alman firmaları.
Almanca içerik profesyonel, Hochdeutsch olmalı.
```

---

## Notlar

### Yapılmayacaklar (filtrelenmiş öneriler)
- ❌ Next.js ekleme → Astro yeterli, karmaşıklık gereksiz
- ❌ Supabase CMS → İçerik zaten Markdown/content collections ile yönetiliyor
- ❌ LinkedIn/Twitter otomatik paylaşım → n8n ile ileride yapılabilir, şimdi değil
- ❌ Google Ads → Site optimizasyonu bitmeden reklam verme
- ❌ Testimonials/referans yorumları → Henüz toplama altyapısı yok
- ❌ Cal.com embed → Önce basit link yeterli

### Teknik Hatırlatmalar
- Astro 6, Node.js >=22.12.0 gerektirir
- Build: `npm run build` → dist/ klasörüne çıktı
- Deploy: GitHub push → server git pull → npm run build
- Server: root@62.164.222.4, nginx dist/ serve ediyor
- Renk paleti: amber #FFBC42, navy #0a1628, card #111d33, border #1e3a5f, blue #4AA9F5
- Zero JS default – Astro Islands sadece gerektiğinde
