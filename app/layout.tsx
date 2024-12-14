import '@/app/ui/global.css'
import { inter} from '@/app/ui/fonts'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      {/* This is a test line, please ignore*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
