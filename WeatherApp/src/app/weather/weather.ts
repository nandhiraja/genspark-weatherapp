import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherForecast } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class WeatherComponent implements OnInit {
  forecasts = signal<WeatherForecast[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);
  lastUpdated = signal<Date | null>(null);

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadWeather();
  }

  loadWeather(): void {
    this.loading.set(true);
    this.error.set(null);

    this.weatherService.getWeatherForecast().subscribe({
      next: (data) => {
        this.forecasts.set(data);
        this.loading.set(false);
        this.lastUpdated.set(new Date());
      },
      error: (err) => {
        this.error.set(
          'Unable to fetch weather data. Please check your connection and try again.'
        );
        this.loading.set(false);
        console.error('Weather API error:', err);
      },
    });
  }

  isHot(tempC: number): boolean {
    return tempC > 30;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
