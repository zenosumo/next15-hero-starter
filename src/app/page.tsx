'use client';

import {Button, Card, CardBody, Chip} from '@heroui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-background via-content2 to-content3">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary-300 bg-clip-text text-transparent">
              Welcome to Next.js
            </h1>
            <p className="text-default-600 text-lg max-w-2xl mx-auto">Get started by editing your application and watch your changes instantly</p>
          </div>

          <Card className="bg-content1/80 backdrop-blur-sm border border-divider max-w-2xl shadow-lg">
            <CardBody className="gap-6 p-6">
              <div className="flex items-center gap-4 justify-center">
                <Image priority alt="Next.js logo" className="dark:invert" height={38} src="/next.svg" width={180} />
                <Chip color="primary" size="sm" variant="flat">
                  v15
                </Chip>
              </div>

              <ol className="font-mono list-inside list-decimal text-sm text-default-700 space-y-4">
                <li className="flex flex-col gap-2">
                  <span>
                    Get started by editing{' '}
                    <code className="bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300 font-semibold px-2 py-1 rounded-md">
                      src/app/page.tsx
                    </code>
                  </span>
                </li>
                <li className="flex flex-col gap-2">
                  <span>
                    Save and see your changes instantly with <span className="text-secondary-600 dark:text-secondary-400 font-semibold">Turbopack</span>
                  </span>
                </li>
                <li className="flex flex-col gap-2">
                  <span>
                    Explore the comprehensive <span className="text-success-600 dark:text-success-400 font-semibold">color system</span> with full theme support
                  </span>
                </li>
              </ol>

              {/* Color showcase */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                <div className="h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-primary-foreground">Primary</span>
                </div>
                <div className="h-8 bg-secondary rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-secondary-foreground">Secondary</span>
                </div>
                <div className="h-8 bg-success rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-success-foreground">Success</span>
                </div>
                <div className="h-8 bg-warning rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-warning-foreground">Warning</span>
                </div>
              </div>
            </CardBody>
          </Card>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Button as="a" className="font-semibold" color="primary" href="/home" size="lg" variant="shadow">
              Let&apos;s Start
            </Button>
            <Button as="a" className="font-semibold" color="secondary" href="https://heroui.com" size="lg" variant="flat">
              Learn More
            </Button>
            <Button as="a" className="font-semibold" color="success" href="/design/style-guide" size="lg" variant="bordered">
              Style Guide
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
