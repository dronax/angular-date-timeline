# ngx-timeline-calendar

A flexible, responsive, and feature-rich Angular calendar component for managing and displaying events across different views.

## 🌟 Features

- 📅 Month view calendar with multi-day event support
- 🎨 Customizable event colors and types
- 📱 Fully responsive design
- 🔄 Easy navigation between months
- 🏷️ Event type categorization
- 🖥️ Works with Angular 17+

## 🚀 Installation

Install the library using npm:

```bash
npm install angular-date-timeline
```

## 🛠️ Setup

### 1. Import Module

In your `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { TimelineComponent } from 'angular-date-timeline'

@NgModule({
  imports: [
    TimelineComponent
  ]
})
export class AppModule { }
```

### 2. Component Usage

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-timeline 
      [events]="myEvents"
      (showMore)="handleEventClick($event)"
    ></lib-timeline>
  `
})
export class AppComponent {
  myEvents: CalendarEvent[] = [
    {
      title: 'Team Meeting',
      start: new Date(2025, 2, 7),
      end: new Date(2025, 2, 8),
      color: '#90EE90',
      type: 'work'
    }
  ];

  handleEventClick(event: CalendarEvent) {
    console.log('Clicked event:', event);
  }
}
```

## 📋 CalendarEvent Interface

```typescript
interface CalendarEvent {
  id?: number;           // Optional unique identifier
  title: string;         // Event title
  start: Date;           // Start date of the event
  end?: Date;            // Optional end date
  color?: string;        // Event color (hex code)
  type?: 'personal' | 'work' | 'holiday' | 'other';
  allDay?: boolean;      // Optional: is it an all-day event
  displayTitle?: string; // Optional: custom display title
}
```

## 🎚️ Component Inputs

| Input | Type | Description | Default |
|-------|------|-------------|---------|
| `events` | `CalendarEvent[]` | Array of events to display | `[]` |
| `initialView` | `'month'` | Initial calendar view | `'month'` |
| `firstDayOfWeek` | `number` | Day to start the week (0-6) | `0` (Sunday) |

## 🎉 Component Outputs

| Output | Payload | Description |
|--------|---------|-------------|
| `eventClick` | `CalendarEvent` | Emitted when an event is clicked |
| `dateSelect` | `Date` | Emitted when a date is selected |

## 🌈 Styling

The library supports custom theming via CSS variables:

```css
:root {
  --timeline-primary-color: #3498db;
  --timeline-event-opacity: 0.7;
  --timeline-border-color: #e0e0e0;
}
```

## 🔧 Customization Options

### Event Types

You can customize event types and their default colors:

```typescript
import { TimelineModule } from '@yourorg/ngx-timeline-calendar';

TimelineModule.forRoot({
  eventTypes: {
    work: '#90EE90',
    personal: '#FFC0CB',
    holiday: '#E6E6FA'
  }
})
```

## 🌐 Browser Support

- Chrome
- Firefox
- Safari
- Edge
- IE 11+

## 📦 Peer Dependencies

- Angular 17+
- RxJS 7+

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md)

## 🐛 Issues

Found a bug? Please file an issue on our [GitHub Issues](https://github.com/dronax/ngx-timeline-calendar/issues)

## 💡 Changelog

### v0.0.3
- Initial release
- Month view calendar
- Responsive design
- Event type support

---

**Created with ❤️**
