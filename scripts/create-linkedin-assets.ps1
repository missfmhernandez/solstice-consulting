Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "public\assets\linkedin"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$ink = [System.Drawing.Color]::FromArgb(255, 32, 29, 25)
$muted = [System.Drawing.Color]::FromArgb(255, 112, 103, 93)
$clay = [System.Drawing.Color]::FromArgb(255, 180, 111, 82)
$moss = [System.Drawing.Color]::FromArgb(255, 111, 122, 88)
$sand = [System.Drawing.Color]::FromArgb(255, 244, 239, 231)
$cream = [System.Drawing.Color]::FromArgb(255, 251, 250, 247)
$white = [System.Drawing.Color]::White

function New-Canvas($width, $height, $background) {
  $bmp = New-Object System.Drawing.Bitmap $width, $height
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $g.Clear($background)
  return @{ Bitmap = $bmp; Graphics = $g }
}

function Font($size, $style = [System.Drawing.FontStyle]::Regular) {
  return New-Object System.Drawing.Font "Segoe UI", $size, $style, ([System.Drawing.GraphicsUnit]::Pixel)
}

function Brush($color) {
  return New-Object System.Drawing.SolidBrush $color
}

function Draw-Text($g, $text, $font, $color, $x, $y, $w, $h, $align = "Near") {
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::$align
  $format.LineAlignment = [System.Drawing.StringAlignment]::Near
  $format.Trimming = [System.Drawing.StringTrimming]::Word
  $rect = New-Object System.Drawing.RectangleF $x, $y, $w, $h
  $g.DrawString($text, $font, (Brush $color), $rect, $format)
}

function Draw-Brand($g, $x, $y, $scale = 1) {
  Draw-Text $g "Solstice Consulting" (Font (28 * $scale) ([System.Drawing.FontStyle]::Bold)) $ink $x $y (460 * $scale) (42 * $scale)
  Draw-Text $g "Leadership | Talent | Performance" (Font (15 * $scale) ([System.Drawing.FontStyle]::Regular)) $muted $x ($y + 42 * $scale) (460 * $scale) (30 * $scale)
}

function Draw-Rule($g, $x, $y, $w, $color = $clay) {
  $pen = New-Object System.Drawing.Pen $color, 3
  $g.DrawLine($pen, $x, $y, ($x + $w), $y)
  $pen.Dispose()
}

function Draw-SoftShape($g, $x, $y, $w, $h, $color) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $r = 34
  $path.AddArc($x, $y, $r, $r, 180, 90)
  $path.AddArc(($x + $w - $r), $y, $r, $r, 270, 90)
  $path.AddArc(($x + $w - $r), ($y + $h - $r), $r, $r, 0, 90)
  $path.AddArc($x, ($y + $h - $r), $r, $r, 90, 90)
  $path.CloseFigure()
  $g.FillPath((Brush $color), $path)
  $path.Dispose()
}

function Save-Image($canvas, $name) {
  $path = Join-Path $outDir $name
  $canvas.Bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Graphics.Dispose()
  $canvas.Bitmap.Dispose()
}

function Draw-Headshot($g, $x, $y, $size) {
  $photoPath = Join-Path $root "public\assets\francesca-headshot.png"
  if (!(Test-Path $photoPath)) { return }
  $img = [System.Drawing.Image]::FromFile($photoPath)
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddEllipse($x, $y, $size, $size)
  $oldClip = $g.Clip
  $g.SetClip($path)
  $g.DrawImage($img, $x, $y, $size, $size)
  $g.Clip = $oldClip
  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(70, 32, 29, 25)), 3
  $g.DrawEllipse($pen, $x, $y, $size, $size)
  $pen.Dispose()
  $path.Dispose()
  $img.Dispose()
}

# LinkedIn profile/company banner
$c = New-Canvas 1584 396 $cream
$g = $c.Graphics
Draw-SoftShape $g 1060 -120 420 420 ([System.Drawing.Color]::FromArgb(255, 244, 239, 231))
Draw-SoftShape $g 1160 170 520 260 ([System.Drawing.Color]::FromArgb(255, 238, 230, 218))
Draw-Brand $g 96 76 1.15
Draw-Rule $g 96 176 92 $clay
Draw-Text $g "Sharper leadership. Better decisions. Stronger performance." (Font 46 ([System.Drawing.FontStyle]::Bold)) $ink 96 204 980 116
Draw-Text $g "Practical leadership and talent solutions designed for growing organisations." (Font 23) $muted 98 326 900 44
Save-Image $c "solstice-linkedin-banner.png"

# Founder announcement
$c = New-Canvas 1200 1200 $cream
$g = $c.Graphics
Draw-SoftShape $g 72 72 1056 1056 $sand
Draw-Headshot $g 728 190 300
Draw-Brand $g 132 124 1
Draw-Rule $g 132 228 82 $clay
Draw-Text $g "Founded to strengthen leadership capability and organisational performance." (Font 48 ([System.Drawing.FontStyle]::Bold)) $ink 132 292 610 330
Draw-Text $g "Solstice Consulting brings leadership, assessment, coaching and talent expertise together with commercial understanding." (Font 27) $muted 132 694 620 168
Draw-Text $g "Francesca Hernandez`nFounder, Solstice Consulting" (Font 22 ([System.Drawing.FontStyle]::Bold)) $ink 770 534 280 96
Save-Image $c "solstice-founder-announcement.png"

# Point of view quote card
$c = New-Canvas 1200 1200 $sand
$g = $c.Graphics
Draw-Brand $g 120 104 1
Draw-Rule $g 120 222 82 $clay
Draw-Text $g "Better leadership and talent decisions create stronger organisations." (Font 72 ([System.Drawing.FontStyle]::Bold)) $ink 120 318 920 390
Draw-Text $g "A strategic point of view from Solstice Consulting." (Font 28) $muted 122 804 760 70
Draw-Text $g "Leadership | Talent | Performance" (Font 24 ([System.Drawing.FontStyle]::Bold)) $moss 120 1014 700 50
Save-Image $c "solstice-point-of-view.png"

# Partnerships post
$c = New-Canvas 1200 1200 $cream
$g = $c.Graphics
Draw-SoftShape $g 80 80 1040 1040 $sand
Draw-Brand $g 132 124 1
Draw-Rule $g 132 228 82 $clay
Draw-Text $g "Extend your client offering without increasing internal headcount." (Font 62 ([System.Drawing.FontStyle]::Bold)) $ink 132 308 860 300
Draw-Text $g "White-label and partnership-based consulting support for recruiters, executive search firms, HR consultancies and aligned people businesses." (Font 28) $muted 132 704 840 168
Draw-Text $g "Leadership | Assessment | Coaching | Talent advisory" (Font 24 ([System.Drawing.FontStyle]::Bold)) $moss 132 984 860 54
Save-Image $c "solstice-partnerships.png"

# Services carousel cover
$c = New-Canvas 1200 1200 $ink
$g = $c.Graphics
Draw-Text $g "Solstice Consulting" (Font 30 ([System.Drawing.FontStyle]::Bold)) $cream 104 96 500 50
Draw-Text $g "Leadership | Talent | Performance" (Font 18) ([System.Drawing.Color]::FromArgb(210, 251, 250, 247)) 104 140 500 40
Draw-Rule $g 104 232 82 $clay
Draw-Text $g "Practical leadership and talent solutions for growing organisations." (Font 68 ([System.Drawing.FontStyle]::Bold)) $cream 104 326 920 390
Draw-Text $g "Swipe for four ways Solstice can support leadership, assessment and talent priorities." (Font 28) ([System.Drawing.Color]::FromArgb(210, 251, 250, 247)) 108 832 820 110
Draw-Text $g "01 / 05" (Font 22 ([System.Drawing.FontStyle]::Bold)) $clay 104 1020 200 40
Save-Image $c "solstice-services-carousel-01.png"

$slides = @(
  @("Leadership Development", "Leadership capability aligned to organisational performance and strategic priorities."),
  @("Management Training", "Practical capability for managers leading performance, people and change."),
  @("Assessment & 360 Feedback", "Insight-led assessment using behavioural data, feedback and psychometric tools."),
  @("Talent & Succession", "Identify, develop and retain people with the potential to drive future growth.")
)

for ($i = 0; $i -lt $slides.Count; $i++) {
  $c = New-Canvas 1200 1200 $cream
  $g = $c.Graphics
  Draw-SoftShape $g 92 92 1016 1016 $sand
  Draw-Brand $g 136 124 0.9
  Draw-Text $g ("0{0} / 05" -f ($i + 2)) (Font 22 ([System.Drawing.FontStyle]::Bold)) $clay 136 244 220 42
  Draw-Rule $g 136 306 82 $clay
  Draw-Text $g $slides[$i][0] (Font 68 ([System.Drawing.FontStyle]::Bold)) $ink 136 390 760 180
  Draw-Text $g $slides[$i][1] (Font 34) $muted 138 650 820 190
  Draw-Text $g "Solstice Consulting" (Font 24 ([System.Drawing.FontStyle]::Bold)) $moss 136 1010 500 42
  Save-Image $c ("solstice-services-carousel-0{0}.png" -f ($i + 2))
}

Write-Host "Created LinkedIn assets in $outDir"
