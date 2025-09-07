'use client';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Chip,
  Divider,
  ScrollShadow,
  Snippet,
  Tabs,
  Tab,
  Input,
  Checkbox,
  Progress,
  Link,
  User,
} from '@heroui/react';
import {Wallet, BriefcaseBusiness, FolderKanban, SwitchCamera, LogOut, TrendingUp, TrendingDown, ChevronRight} from 'lucide-react';
import {Line, LineChart, ResponsiveContainer, Tooltip} from 'recharts';
import {useState} from 'react';

export default function StyleGuidePage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Chart data for dashboard example
  const chartData = [
    {
      average: 400,
      today: 240,
    },
    {
      average: 300,
      today: 139,
    },
    {
      average: 200,
      today: 980,
    },
    {
      average: 278,
      today: 390,
    },
    {
      average: 189,
      today: 480,
    },
    {
      average: 239,
      today: 380,
    },
    {
      average: 349,
      today: 430,
    },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const layoutColors = [
    {
      name: 'Background',
      value: 'var(--color-background)',
      css: 'bg-background',
      textColor: 'text-foreground',
      description: 'Main canvas color for overall layout',
    },
    {
      name: 'Foreground',
      value: 'var(--color-foreground)',
      css: 'bg-foreground',
      textColor: 'text-background',
      description: 'Primary text color for optimal readability',
    },
    {name: 'Content1', value: 'var(--color-content-1)', css: 'bg-content1', textColor: 'text-foreground', description: 'Primary content background'},
    {name: 'Content2', value: 'var(--color-content-2)', css: 'bg-content2', textColor: 'text-foreground', description: 'Secondary content background'},
    {name: 'Content3', value: 'var(--color-content-3)', css: 'bg-content3', textColor: 'text-foreground', description: 'Tertiary content background'},
    {name: 'Content4', value: 'var(--color-content-4)', css: 'bg-content4', textColor: 'text-foreground', description: 'Quaternary content background'},
  ];

  const baseColors = [
    {name: 'Default', value: 'var(--color-default)', css: 'bg-default', textColor: 'text-default-foreground', description: 'Default neutral color'},
    {
      name: 'Primary',
      value: 'var(--color-primary)',
      css: 'bg-primary',
      textColor: 'text-primary-foreground',
      description: 'Brand primary for key actions and highlights',
    },
    {
      name: 'Secondary',
      value: 'var(--color-secondary)',
      css: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      description: 'Supporting color for secondary elements',
    },
    {name: 'Success', value: 'var(--color-success)', css: 'bg-success', textColor: 'text-success-foreground', description: 'Success states and confirmations'},
    {name: 'Warning', value: 'var(--color-warning)', css: 'bg-warning', textColor: 'text-warning-foreground', description: 'Warning messages and cautions'},
    {name: 'Danger', value: 'var(--color-danger)', css: 'bg-danger', textColor: 'text-danger-foreground', description: 'Error states and destructive actions'},
  ];

  const colorScales = {
    default: [
      {name: 'Default 50', value: 'var(--color-default-50)', css: 'bg-default-50', textColor: 'text-foreground', description: 'Lightest default shade'},
      {name: 'Default 100', value: 'var(--color-default-100)', css: 'bg-default-100', textColor: 'text-foreground', description: 'Very light default shade'},
      {name: 'Default 200', value: 'var(--color-default-200)', css: 'bg-default-200', textColor: 'text-foreground', description: 'Light default shade'},
      {name: 'Default 300', value: 'var(--color-default-300)', css: 'bg-default-300', textColor: 'text-foreground', description: 'Medium-light default shade'},
      {name: 'Default 400', value: 'var(--color-default-400)', css: 'bg-default-400', textColor: 'text-background', description: 'Medium default shade'},
      {name: 'Default 500', value: 'var(--color-default-500)', css: 'bg-default-500', textColor: 'text-background', description: 'Base default shade'},
      {name: 'Default 600', value: 'var(--color-default-600)', css: 'bg-default-600', textColor: 'text-background', description: 'Medium-dark default shade'},
      {name: 'Default 700', value: 'var(--color-default-700)', css: 'bg-default-700', textColor: 'text-background', description: 'Dark default shade'},
      {name: 'Default 800', value: 'var(--color-default-800)', css: 'bg-default-800', textColor: 'text-background', description: 'Very dark default shade'},
      {name: 'Default 900', value: 'var(--color-default-900)', css: 'bg-default-900', textColor: 'text-background', description: 'Darkest default shade'},
    ],
    primary: [
      {name: 'Primary 50', value: 'var(--color-primary-50)', css: 'bg-primary-50', textColor: 'text-foreground', description: 'Lightest primary shade'},
      {name: 'Primary 100', value: 'var(--color-primary-100)', css: 'bg-primary-100', textColor: 'text-foreground', description: 'Very light primary shade'},
      {name: 'Primary 200', value: 'var(--color-primary-200)', css: 'bg-primary-200', textColor: 'text-foreground', description: 'Light primary shade'},
      {name: 'Primary 300', value: 'var(--color-primary-300)', css: 'bg-primary-300', textColor: 'text-background', description: 'Medium-light primary shade'},
      {name: 'Primary 400', value: 'var(--color-primary-400)', css: 'bg-primary-400', textColor: 'text-background', description: 'Medium primary shade'},
      {name: 'Primary 500', value: 'var(--color-primary-500)', css: 'bg-primary-500', textColor: 'text-background', description: 'Base primary shade'},
      {name: 'Primary 600', value: 'var(--color-primary-600)', css: 'bg-primary-600', textColor: 'text-background', description: 'Medium-dark primary shade'},
      {name: 'Primary 700', value: 'var(--color-primary-700)', css: 'bg-primary-700', textColor: 'text-background', description: 'Dark primary shade'},
      {name: 'Primary 800', value: 'var(--color-primary-800)', css: 'bg-primary-800', textColor: 'text-background', description: 'Very dark primary shade'},
      {name: 'Primary 900', value: 'var(--color-primary-900)', css: 'bg-primary-900', textColor: 'text-background', description: 'Darkest primary shade'},
    ],
    secondary: [
      {name: 'Secondary 50', value: 'var(--color-secondary-50)', css: 'bg-secondary-50', textColor: 'text-foreground', description: 'Lightest secondary shade'},
      {
        name: 'Secondary 100',
        value: 'var(--color-secondary-100)',
        css: 'bg-secondary-100',
        textColor: 'text-foreground',
        description: 'Very light secondary shade',
      },
      {name: 'Secondary 200', value: 'var(--color-secondary-200)', css: 'bg-secondary-200', textColor: 'text-foreground', description: 'Light secondary shade'},
      {
        name: 'Secondary 300',
        value: 'var(--color-secondary-300)',
        css: 'bg-secondary-300',
        textColor: 'text-background',
        description: 'Medium-light secondary shade',
      },
      {
        name: 'Secondary 400',
        value: 'var(--color-secondary-400)',
        css: 'bg-secondary-400',
        textColor: 'text-background',
        description: 'Medium secondary shade',
      },
      {name: 'Secondary 500', value: 'var(--color-secondary-500)', css: 'bg-secondary-500', textColor: 'text-background', description: 'Base secondary shade'},
      {
        name: 'Secondary 600',
        value: 'var(--color-secondary-600)',
        css: 'bg-secondary-600',
        textColor: 'text-background',
        description: 'Medium-dark secondary shade',
      },
      {name: 'Secondary 700', value: 'var(--color-secondary-700)', css: 'bg-secondary-700', textColor: 'text-background', description: 'Dark secondary shade'},
      {
        name: 'Secondary 800',
        value: 'var(--color-secondary-800)',
        css: 'bg-secondary-800',
        textColor: 'text-background',
        description: 'Very dark secondary shade',
      },
      {
        name: 'Secondary 900',
        value: 'var(--color-secondary-900)',
        css: 'bg-secondary-900',
        textColor: 'text-background',
        description: 'Darkest secondary shade',
      },
    ],
    success: [
      {name: 'Success 50', value: 'var(--color-success-50)', css: 'bg-success-50', textColor: 'text-foreground', description: 'Lightest success shade'},
      {name: 'Success 100', value: 'var(--color-success-100)', css: 'bg-success-100', textColor: 'text-foreground', description: 'Very light success shade'},
      {name: 'Success 200', value: 'var(--color-success-200)', css: 'bg-success-200', textColor: 'text-foreground', description: 'Light success shade'},
      {name: 'Success 300', value: 'var(--color-success-300)', css: 'bg-success-300', textColor: 'text-background', description: 'Medium-light success shade'},
      {name: 'Success 400', value: 'var(--color-success-400)', css: 'bg-success-400', textColor: 'text-background', description: 'Medium success shade'},
      {name: 'Success 500', value: 'var(--color-success-500)', css: 'bg-success-500', textColor: 'text-background', description: 'Base success shade'},
      {name: 'Success 600', value: 'var(--color-success-600)', css: 'bg-success-600', textColor: 'text-background', description: 'Medium-dark success shade'},
      {name: 'Success 700', value: 'var(--color-success-700)', css: 'bg-success-700', textColor: 'text-background', description: 'Dark success shade'},
      {name: 'Success 800', value: 'var(--color-success-800)', css: 'bg-success-800', textColor: 'text-background', description: 'Very dark success shade'},
      {name: 'Success 900', value: 'var(--color-success-900)', css: 'bg-success-900', textColor: 'text-background', description: 'Darkest success shade'},
    ],
    warning: [
      {name: 'Warning 50', value: 'var(--color-warning-50)', css: 'bg-warning-50', textColor: 'text-foreground', description: 'Lightest warning shade'},
      {name: 'Warning 100', value: 'var(--color-warning-100)', css: 'bg-warning-100', textColor: 'text-foreground', description: 'Very light warning shade'},
      {name: 'Warning 200', value: 'var(--color-warning-200)', css: 'bg-warning-200', textColor: 'text-foreground', description: 'Light warning shade'},
      {name: 'Warning 300', value: 'var(--color-warning-300)', css: 'bg-warning-300', textColor: 'text-background', description: 'Medium-light warning shade'},
      {name: 'Warning 400', value: 'var(--color-warning-400)', css: 'bg-warning-400', textColor: 'text-background', description: 'Medium warning shade'},
      {name: 'Warning 500', value: 'var(--color-warning-500)', css: 'bg-warning-500', textColor: 'text-background', description: 'Base warning shade'},
      {name: 'Warning 600', value: 'var(--color-warning-600)', css: 'bg-warning-600', textColor: 'text-background', description: 'Medium-dark warning shade'},
      {name: 'Warning 700', value: 'var(--color-warning-700)', css: 'bg-warning-700', textColor: 'text-background', description: 'Dark warning shade'},
      {name: 'Warning 800', value: 'var(--color-warning-800)', css: 'bg-warning-800', textColor: 'text-background', description: 'Very dark warning shade'},
      {name: 'Warning 900', value: 'var(--color-warning-900)', css: 'bg-warning-900', textColor: 'text-background', description: 'Darkest warning shade'},
    ],
    danger: [
      {name: 'Danger 50', value: 'var(--color-danger-50)', css: 'bg-danger-50', textColor: 'text-foreground', description: 'Lightest danger shade'},
      {name: 'Danger 100', value: 'var(--color-danger-100)', css: 'bg-danger-100', textColor: 'text-foreground', description: 'Very light danger shade'},
      {name: 'Danger 200', value: 'var(--color-danger-200)', css: 'bg-danger-200', textColor: 'text-foreground', description: 'Light danger shade'},
      {name: 'Danger 300', value: 'var(--color-danger-300)', css: 'bg-danger-300', textColor: 'text-background', description: 'Medium-light danger shade'},
      {name: 'Danger 400', value: 'var(--color-danger-400)', css: 'bg-danger-400', textColor: 'text-background', description: 'Medium danger shade'},
      {name: 'Danger 500', value: 'var(--color-danger-500)', css: 'bg-danger-500', textColor: 'text-background', description: 'Base danger shade'},
      {name: 'Danger 600', value: 'var(--color-danger-600)', css: 'bg-danger-600', textColor: 'text-background', description: 'Medium-dark danger shade'},
      {name: 'Danger 700', value: 'var(--color-danger-700)', css: 'bg-danger-700', textColor: 'text-background', description: 'Dark danger shade'},
      {name: 'Danger 800', value: 'var(--color-danger-800)', css: 'bg-danger-800', textColor: 'text-background', description: 'Very dark danger shade'},
      {name: 'Danger 900', value: 'var(--color-danger-900)', css: 'bg-danger-900', textColor: 'text-background', description: 'Darkest danger shade'},
    ],
  };

  const displayTypography = [
    {
      name: 'Giant Title',
      font: 'Montserrat',
      weight: '700',
      size: '65px',
      letterSpacing: '-0.02em',
      lineHeight: '1.3em',
      usage: 'Hero sections, major page headers',
      className: 'text-[65px] font-bold tracking-[-0.02em] leading-[1.3em]',
    },
    {
      name: 'Title H1',
      font: 'Montserrat',
      weight: '600',
      size: '40px',
      letterSpacing: '0em',
      lineHeight: '1.2em',
      usage: 'Primary page headings',
      className: 'text-[40px] font-semibold leading-[1.2em]',
    },
    {
      name: 'Title H2',
      font: 'Montserrat',
      weight: '600',
      size: '35px',
      letterSpacing: '0em',
      lineHeight: '1.3em',
      usage: 'Section headings',
      className: 'text-[35px] font-semibold leading-[1.3em]',
    },
    {
      name: 'Title H3',
      font: 'Montserrat',
      weight: '600',
      size: '30px',
      letterSpacing: '0em',
      lineHeight: '1.3em',
      usage: 'Subsection headings',
      className: 'text-[30px] font-semibold leading-[1.3em]',
    },
    {
      name: 'Title H4',
      font: 'Montserrat',
      weight: '600',
      size: '28px',
      letterSpacing: '0em',
      lineHeight: '1.3em',
      usage: 'Component headings',
      className: 'text-[28px] font-semibold leading-[1.3em]',
    },
    {
      name: 'Wide Title',
      font: 'Montserrat',
      weight: '700',
      size: '20px',
      letterSpacing: '0.13em',
      lineHeight: '1.5em',
      usage: 'Special emphasis titles, cards',
      className: 'text-[20px] font-bold tracking-[0.13em] leading-[1.5em]',
    },
  ];

  const bodyTypography = [
    {
      name: 'Big Paragraph',
      font: 'Open Sans',
      weight: '400',
      size: '23px',
      letterSpacing: '0em',
      lineHeight: '1.5em',
      usage: 'Lead paragraphs, important content',
      className: 'text-[23px] font-normal leading-[1.5em]',
    },
    {
      name: 'Body Text',
      font: 'Open Sans',
      weight: '400',
      size: '18px',
      letterSpacing: '0em',
      lineHeight: '1.3em',
      usage: 'Standard body content, default text',
      className: 'text-[18px] font-normal leading-[1.3em]',
    },
    {
      name: 'Small Paragraph',
      font: 'Open Sans',
      weight: '400',
      size: '14px',
      letterSpacing: '0em',
      lineHeight: '1.3em',
      usage: 'Captions, metadata, fine print',
      className: 'text-[14px] font-normal leading-[1.3em]',
    },
  ];

  const interactiveTypography = [
    {
      name: 'Nav Link',
      font: 'Open Sans',
      weight: '600',
      size: '20px',
      letterSpacing: '0em',
      lineHeight: '1.3em',
      usage: 'Navigation elements',
      className: 'text-[20px] font-semibold leading-[1.3em]',
    },
    {
      name: 'Button Caption',
      font: 'Open Sans',
      weight: '600',
      size: '18px',
      letterSpacing: '0em',
      lineHeight: '1.3em',
      usage: 'Button labels, call-to-action text',
      className: 'text-[18px] font-semibold leading-[1.3em]',
    },
    {
      name: 'Footer Link',
      font: 'Open Sans',
      weight: '400',
      size: '18px',
      letterSpacing: '0em',
      lineHeight: '1.7em',
      usage: 'Footer navigation, secondary links',
      className: 'text-[18px] font-normal leading-[1.7em]',
    },
  ];

  const ColorCard = ({color, type}: {color: any; type: string}) => {
    const id = `${type}-${color.name}`;
    const isCopied = copiedColor === id;
    const isScale = type === 'scale';

    return (
      <Card
        isPressable
        className={`h-full hover:scale-105 transition-transform cursor-pointer ${isScale ? 'min-h-[120px]' : ''}`}
        onPress={() => copyToClipboard(color.value, id)}
      >
        <CardBody className="p-0">
          <div className={`${isScale ? 'h-16' : 'h-24'} ${color.css} relative group`}>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/20">
              <span className="text-background font-semibold text-xs">{isCopied ? 'Copied!' : 'Copy'}</span>
            </div>
          </div>
          <div className={`${isScale ? 'p-2' : 'p-3'} space-y-1`}>
            <div className="flex flex-col items-start">
              <h4 className={`font-semibold ${isScale ? 'text-sm' : 'text-base'}`}>{color.name}</h4>
              {!isScale && (
                <Chip size="sm" variant="flat">
                  {color.value}
                </Chip>
              )}
            </div>
            {!isScale && <p className="text-xs text-default-500">{color.description}</p>}
          </div>
        </CardBody>
      </Card>
    );
  };

  const TypographyCard = ({type}: {type: any}) => {
    return (
      <Card className="h-full">
        <CardHeader className="flex-col items-start space-y-2">
          <h3 className="text-xl font-semibold">{type.name}</h3>
          <div className="flex flex-wrap gap-2">
            <Chip size="sm" variant="flat">
              {type.font}
            </Chip>
            <Chip color="primary" size="sm" variant="flat">
              Weight: {type.weight}
            </Chip>
            <Chip color="secondary" size="sm" variant="flat">
              {type.size}
            </Chip>
          </div>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className={`${type.className} font-['${type.font.replace(' ', '_')}']`}>The quick brown fox jumps over the lazy dog</div>
          <Divider />
          <div className="space-y-2">
            <p className="text-sm text-default-500">{type.usage}</p>
            <div className="space-y-1">
              <Snippet size="sm" symbol="" variant="flat">
                font-size: {type.size}
              </Snippet>
              <Snippet size="sm" symbol="" variant="flat">
                font-weight: {type.weight}
              </Snippet>
              <Snippet size="sm" symbol="" variant="flat">
                letter-spacing: {type.letterSpacing}
              </Snippet>
              <Snippet size="sm" symbol="" variant="flat">
                line-height: {type.lineHeight}
              </Snippet>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Design System Style Guide</h1>
          <p className="text-xl text-default-600 max-w-3xl mx-auto">A comprehensive reference for colors, typography, and design principles</p>
        </div>

        <Tabs
          aria-label="Style Guide Sections"
          classNames={{
            tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-primary',
            tab: 'max-w-fit px-0 h-12',
          }}
          color="primary"
          variant="underlined"
        >
          <Tab key="colors" title="Color Palette">
            <ScrollShadow hideScrollBar className="h-[calc(100vh-300px)]">
              <div className="space-y-12 py-8">
                <section>
                  <h2 className="text-3xl font-semibold mb-6">Layout & Content Colors</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {layoutColors.map((color) => (
                      <ColorCard key={color.name} color={color} type="layout" />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Base Colors</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {baseColors.map((color) => (
                      <ColorCard key={color.name} color={color} type="base" />
                    ))}
                  </div>
                </section>

                <Divider />

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Default Color Scale</h2>
                  <div className="grid grid-cols-5 lg:grid-cols-10 gap-3">
                    {colorScales.default.map((color) => (
                      <ColorCard key={color.name} color={color} type="scale" />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Primary Color Scale</h2>
                  <div className="grid grid-cols-5 lg:grid-cols-10 gap-3">
                    {colorScales.primary.map((color) => (
                      <ColorCard key={color.name} color={color} type="scale" />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Secondary Color Scale</h2>
                  <div className="grid grid-cols-5 lg:grid-cols-10 gap-3">
                    {colorScales.secondary.map((color) => (
                      <ColorCard key={color.name} color={color} type="scale" />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Success Color Scale</h2>
                  <div className="grid grid-cols-5 lg:grid-cols-10 gap-3">
                    {colorScales.success.map((color) => (
                      <ColorCard key={color.name} color={color} type="scale" />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Warning Color Scale</h2>
                  <div className="grid grid-cols-5 lg:grid-cols-10 gap-3">
                    {colorScales.warning.map((color) => (
                      <ColorCard key={color.name} color={color} type="scale" />
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Danger Color Scale</h2>
                  <div className="grid grid-cols-5 lg:grid-cols-10 gap-3">
                    {colorScales.danger.map((color) => (
                      <ColorCard key={color.name} color={color} type="scale" />
                    ))}
                  </div>
                </section>
              </div>
            </ScrollShadow>
          </Tab>

          <Tab key="typography" title="Typography System">
            <ScrollShadow hideScrollBar className="h-[calc(100vh-300px)]">
              <div className="space-y-12 py-8">
                <section>
                  <h2 className="text-3xl font-semibold mb-6">Display Typography</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {displayTypography.map((type) => (
                      <TypographyCard key={type.name} type={type} />
                    ))}
                  </div>
                </section>

                <Divider />

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Body Typography</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {bodyTypography.map((type) => (
                      <TypographyCard key={type.name} type={type} />
                    ))}
                  </div>
                </section>

                <Divider />

                <section>
                  <h2 className="text-3xl font-semibold mb-6">Interactive Typography</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {interactiveTypography.map((type) => (
                      <TypographyCard key={type.name} type={type} />
                    ))}
                  </div>
                </section>
              </div>
            </ScrollShadow>
          </Tab>

          <Tab key="examples" title="Interactive Examples">
            <ScrollShadow hideScrollBar className="h-[calc(100vh-300px)]">
              <div className="space-y-8 py-8">
                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">Card Components</h3>
                  </CardHeader>
                  <CardBody className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">UI</span>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-md font-semibold">HeroUI</p>
                            <p className="text-small text-default-500">heroui.com</p>
                          </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                          <p>Make beautiful websites regardless of your design experience.</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                          <Link className="text-primary" href="https://heroui.com">
                            Visit documentation
                          </Link>
                        </CardFooter>
                      </Card>

                      <Card className="max-w-[400px] primary-gradient">
                        <CardHeader className="flex gap-3">
                          <div className="w-10 h-10 bg-background/20 rounded-md flex items-center justify-center">
                            <span className="text-foreground font-bold">DS</span>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-md font-semibold">Design System</p>
                            <p className="text-small text-foreground/70">Theme showcase</p>
                          </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                          <p>Comprehensive design system with full theme support and color scales.</p>
                        </CardBody>
                      </Card>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">Button Variations</h3>
                  </CardHeader>
                  <CardBody className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Color Variants</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button color="default">Default</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button color="success">Success</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="danger">Danger</Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Style Variants (Default)</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button color="default" variant="solid">
                          Solid
                        </Button>
                        <Button color="default" variant="faded">
                          Faded
                        </Button>
                        <Button color="default" variant="bordered">
                          Bordered
                        </Button>
                        <Button color="default" variant="light">
                          Light
                        </Button>
                        <Button color="default" variant="flat">
                          Flat
                        </Button>
                        <Button color="default" variant="ghost">
                          Ghost
                        </Button>
                        <Button color="default" variant="shadow">
                          Shadow
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Style Variants (Primary)</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button color="primary" variant="solid">
                          Solid
                        </Button>
                        <Button color="primary" variant="faded">
                          Faded
                        </Button>
                        <Button color="primary" variant="bordered">
                          Bordered
                        </Button>
                        <Button color="primary" variant="light">
                          Light
                        </Button>
                        <Button color="primary" variant="flat">
                          Flat
                        </Button>
                        <Button color="primary" variant="ghost">
                          Ghost
                        </Button>
                        <Button color="primary" variant="shadow">
                          Shadow
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Special Combinations</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button color="danger" variant="flat">
                          Flat Danger
                        </Button>
                        <Button color="warning" variant="flat">
                          Flat Warning
                        </Button>
                        <Button color="warning" variant="ghost">
                          Ghost Warning
                        </Button>
                        <Button isDisabled>Disabled</Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">Form Elements</h3>
                  </CardHeader>
                  <CardBody className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Input Fields</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Email" placeholder="Enter your email" type="email" />
                        <Input label="Password" placeholder="Enter your password" type="password" />
                        <Input label="Name" placeholder="Enter your name" type="text" variant="bordered" />
                        <Input label="Username" placeholder="@username" type="text" variant="underlined" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Checkboxes</h4>
                      <div className="flex flex-wrap gap-4">
                        <Checkbox defaultSelected color="default">
                          Default
                        </Checkbox>
                        <Checkbox defaultSelected color="primary">
                          Primary
                        </Checkbox>
                        <Checkbox defaultSelected color="secondary">
                          Secondary
                        </Checkbox>
                        <Checkbox defaultSelected color="success">
                          Success
                        </Checkbox>
                        <Checkbox defaultSelected color="warning">
                          Warning
                        </Checkbox>
                        <Checkbox defaultSelected color="danger">
                          Danger
                        </Checkbox>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Progress Indicators</h4>
                      <div className="space-y-4 max-w-md">
                        <Progress aria-label="Loading..." color="primary" value={30} />
                        <Progress aria-label="Processing..." color="success" value={60} />
                        <Progress aria-label="Uploading..." color="warning" value={85} />
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">Chip Components</h3>
                  </CardHeader>
                  <CardBody className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Color Variants</h4>
                      <div className="flex flex-wrap gap-3">
                        <Chip color="default">Default</Chip>
                        <Chip color="primary">Primary</Chip>
                        <Chip color="secondary">Secondary</Chip>
                        <Chip color="success">Success</Chip>
                        <Chip color="warning">Warning</Chip>
                        <Chip color="danger">Danger</Chip>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Style Variants (Warning)</h4>
                      <div className="flex flex-wrap gap-3">
                        <Chip color="warning" variant="solid">
                          Solid
                        </Chip>
                        <Chip color="warning" variant="bordered">
                          Bordered
                        </Chip>
                        <Chip color="warning" variant="light">
                          Light
                        </Chip>
                        <Chip color="warning" variant="flat">
                          Flat
                        </Chip>
                        <Chip color="warning" variant="faded">
                          Faded
                        </Chip>
                        <Chip color="warning" variant="shadow">
                          Shadow
                        </Chip>
                        <Chip color="warning" variant="dot">
                          Dot
                        </Chip>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Interactive Chips</h4>
                      <div className="flex flex-wrap gap-3">
                        <Chip color="secondary" variant="flat">
                          Status Chip
                        </Chip>
                        <Chip color="success" variant="faded">
                          ✓ Completed
                        </Chip>
                        <Chip onClose={() => console.log('close')}>Removable</Chip>
                        <Chip variant="bordered" onClose={() => console.log('close')}>
                          Closable Bordered
                        </Chip>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">Typography Showcase</h3>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <h1 className="text-[40px] font-semibold leading-[1.2em] text-foreground">Main Page Heading</h1>
                    <h2 className="text-[35px] font-semibold leading-[1.3em] text-foreground">Section Title</h2>
                    <p className="text-[23px] font-normal leading-[1.5em] text-foreground">
                      This is a lead paragraph that introduces important content with larger text size for emphasis and better readability.
                    </p>
                    <p className="text-[18px] font-normal leading-[1.3em] text-default-700">
                      Regular body text follows the lead paragraph. It maintains optimal readability with appropriate line height and letter spacing.
                    </p>
                    <p className="text-[14px] font-normal leading-[1.3em] text-default-600">
                      Small text for captions, metadata, and supplementary information.
                    </p>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">Theme Color Combinations</h3>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-6 bg-background rounded-lg border border-divider">
                        <h4 className="text-primary font-semibold mb-2">Primary on Background</h4>
                        <p className="text-foreground">Main content area with primary accent colors</p>
                      </div>
                      <div className="p-6 bg-primary rounded-lg">
                        <h4 className="text-primary-foreground font-semibold mb-2">Text on Primary</h4>
                        <p className="text-primary-200">Inverted color scheme for emphasis</p>
                      </div>
                      <div className="p-6 bg-content2 rounded-lg">
                        <h4 className="text-secondary font-semibold mb-2">Secondary on Content</h4>
                        <p className="text-default-700">Subtle variation for content sections</p>
                      </div>
                      <div className="p-6 bg-success-100 rounded-lg border border-success-200">
                        <h4 className="text-success-800 font-semibold mb-2">Success State</h4>
                        <p className="text-success-700">Light success background with darker text</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">Focus & Interaction States</h3>
                  </CardHeader>
                  <CardBody className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <Button className="focus:ring-4 focus:ring-focus/30 focus:outline-none">Tab to Focus Me</Button>
                      <Input className="max-w-xs" placeholder="Focus on this input" />
                      <button
                        className="px-4 py-2 rounded-lg border-2 border-default-200 focus:border-focus hover:bg-default-100 transition-colors"
                        type="button"
                      >
                        Custom Focusable Element
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </ScrollShadow>
          </Tab>

          <Tab key="dashboard" title="Dashboard Examples">
            <ScrollShadow hideScrollBar className="h-[calc(100vh-300px)]">
              <div className="py-8">
                <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
                <div className="flex flex-row flex-grow h-full">
                  {/* Left column */}
                  <div className="hidden xl:flex flex-col m-2">
                    <div className="flex flex-col gap-y-6">
                      {/* User */}
                      <div className="">
                        <User
                          avatarProps={{
                            src: 'https://i.pravatar.cc/150?img=11',
                          }}
                          className="flex flex-col"
                          description="Genius Inventor"
                          name="Tony Stark"
                        />
                      </div>

                      {/* Items */}
                      <div className="flex w-48">
                        <ul>
                          <li className="flex py-3 gap-x-2 items-center">
                            <Button isIconOnly color="primary" size="sm">
                              <div>
                                <Wallet height={18} width={18} />
                              </div>
                            </Button>
                            <div className="pl-4">Wallet</div>
                          </li>
                          <li className="flex py-3 gap-x-2 items-center">
                            <Button isIconOnly color="secondary" size="sm">
                              <div>
                                <BriefcaseBusiness height={18} width={18} />
                              </div>
                            </Button>
                            <div className="pl-4">Portfolio</div>
                          </li>
                          <li className="flex py-3 gap-x-2 items-center">
                            <Button isIconOnly color="default" size="sm">
                              <div>
                                <FolderKanban height={18} width={18} />
                              </div>
                            </Button>
                            <div className="pl-4">Projects</div>
                          </li>
                          <li className="flex py-3 gap-x-2 items-center">
                            <Button isIconOnly color="default" size="sm">
                              <div>
                                <SwitchCamera height={18} width={18} />
                              </div>
                            </Button>
                            <div className="pl-4">Transfers</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex h-full items-end">
                      {/* Logout */}
                      <div className="flex">
                        <div className="flex py-2 gap-x-2 items-center">
                          <Button isIconOnly size="sm" variant="light">
                            <LogOut height={18} width={18} />
                          </Button>
                          <div className="pl-4">Log Out</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden xl:flex flex-col flex-1 w-3 px-8 py-2">
                    <Divider orientation="vertical" />
                  </div>

                  {/* Right column */}
                  <div className="flex flex-col w-full">
                    <div className="flex m-2">
                      <Chip className="text-xs bg-content1">Open a deposit and get a 1% instant bonus</Chip>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col w-full md:w-1/2">
                        <Card className="m-2 p-4 primary-gradient">
                          <CardHeader className="text-lg font-light">Total balance</CardHeader>
                          <CardBody>
                            <div className="text-6xl font-thin">
                              <span className="text-3xl pr-3">$</span>100,000
                            </div>
                          </CardBody>
                        </Card>
                        <Card className="m-2 p-4">
                          <CardHeader className="text-lg font-light">Income</CardHeader>
                          <CardBody>
                            <ul>
                              <li>
                                <div className="flex flex-row py-3">
                                  <div className="flex w-full">
                                    <User avatarProps={{src: 'https://i.pravatar.cc/150?img=42'}} description="2 minutes ago" name="Gabbi Garcia" />
                                  </div>
                                  <div className="flex text-xs items-center whitespace-nowrap">$ 10000</div>
                                </div>
                              </li>
                              <li>
                                <div className="flex flex-row py-3">
                                  <div className="flex w-full">
                                    <User avatarProps={{src: 'https://i.pravatar.cc/150?img=43'}} description="4 days ago" name="Maria Ysabel Ortega" />
                                  </div>
                                  <div className="flex text-xs items-center whitespace-nowrap">$ 2500</div>
                                </div>
                              </li>
                              <li>
                                <div className="flex flex-row py-3">
                                  <div className="flex w-full">
                                    <User avatarProps={{src: 'https://i.pravatar.cc/150?img=44'}} description="1 week ago" name="Andrea Brillantes" />
                                  </div>
                                  <div className="flex text-xs items-center whitespace-nowrap">$ 6900</div>
                                </div>
                              </li>
                            </ul>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="flex flex-col w-full md:w-1/2">
                        <div className="flex flex-auto">
                          <Card className="m-2 p-4 w-full">
                            <CardBody>
                              <ResponsiveContainer height="100%" width="100%">
                                <LineChart data={chartData} margin={{top: 5, right: 20, left: 10, bottom: 5}}>
                                  <Tooltip />
                                  <Line dataKey="today" strokeWidth={2} type="monotone" yAxisId={1} />
                                </LineChart>
                              </ResponsiveContainer>
                            </CardBody>
                          </Card>
                        </div>
                        <div>
                          <Card className="m-2 p-4">
                            <CardBody>
                              <div className="flex flex-row ">
                                <div className="flex flex-auto justify-center">
                                  <div className="flex flex-row items-center gap-x-5">
                                    <div className="flex flex-col">
                                      <div className="text-xs">Income</div>
                                      <div className="font-normal">$ 3500</div>
                                    </div>
                                    <div className="">
                                      <div className="flex rounded-full bg-background w-12 h-12 items-center justify-center">
                                        <TrendingUp height={20} width={20} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-auto justify-center">
                                  <div className="flex flex-row items-center gap-x-5">
                                    <div className="flex flex-col">
                                      <div className="text-xs">Spendings</div>
                                      <div className="font-normal">$ 937</div>
                                    </div>
                                    <div className="">
                                      <div className="flex rounded-full bg-background w-12 h-12 items-center justify-center">
                                        <TrendingDown height={20} width={20} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full">
                      <Card className="m-2 p-4 w-full">
                        <CardBody>
                          <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex w-80 pb-10 md:pb-3 justify-center">
                              <div className="flex flex-col ">
                                <div className="font-semibold">Investments</div>
                                <div className="text-xs">Change since last login</div>
                              </div>
                            </div>
                            <div className="flex">
                              <ul className="flex gap-3 sm:gap-5 md:gap-8">
                                <li>
                                  <div className="flex flex-col bg-background rounded-2xl items-center justify-between py-4 w-20 h-28">
                                    <div className="flex pb-3">
                                      <Chip className="bg-primary-600" color="primary" size="sm">
                                        <span className="text-xs font-semibold">APPL</span>
                                      </Chip>
                                    </div>
                                    <div className="flex text-xs">Apple Inc</div>
                                    <div className="flex text-xl font-normal">+3%</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex flex-col bg-background rounded-2xl items-center justify-between py-4 w-20 h-28">
                                    <div className="flex pb-3">
                                      <Chip className="bg-primary-600" color="primary" size="sm">
                                        <span className="text-xs font-semibold">TSLA</span>
                                      </Chip>
                                    </div>
                                    <div className="flex text-xs">Tesla Inc</div>
                                    <div className="flex text-xl font-normal">-1.9%</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex flex-col bg-background rounded-2xl items-center justify-between py-4 w-20 h-28">
                                    <div className="flex pb-3">
                                      <Chip className="bg-primary-600" color="primary" size="sm">
                                        <span className="text-xs font-semibold">EBAY</span>
                                      </Chip>
                                    </div>
                                    <div className="flex text-xs">eBay Inc</div>
                                    <div className="flex text-xl font-normal">+1.1%</div>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex flex-col rounded-2xl items-center justify-between py-4 bg-primary text-primary-foreground w-20 h-28">
                                    <div className="text-xs font-semibold">view all</div>
                                    <div>
                                      <div className="flex rounded-full bg-background text-foreground w-8 h-8 items-center justify-center">
                                        <ChevronRight height={18} width={18} />
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollShadow>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
