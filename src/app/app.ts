import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokeapi } from './services/pokeapi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private pokeapi = inject(Pokeapi);

  query = '';
  loading = signal(false);
  error = signal('');
  pokemon = signal<any>(null);
  abilityInfo = signal('');
  weaknesses = signal<string[]>([]);
  team = signal<any[]>([]);

  buscar(): void {
    if (!this.query.trim()) {
      this.error.set('Escribe un nombre o número.');
      return;
    }
    this.loading.set(true);
    this.error.set('');
    this.pokemon.set(null);
    this.abilityInfo.set('');
    this.weaknesses.set([]);

    this.pokeapi.getPokemon(this.query).subscribe({
      next: (data) => {
        this.pokemon.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Pokémon no encontrado.');
        this.loading.set(false);
      }
    });
  }

  verHabilidad(name: string): void {
    this.pokeapi.getAbility(name).subscribe({
      next: (data) => {
        const entry = data.effect_entries.find((e: any) => e.language.name === 'en') || data.effect_entries[0];
        this.abilityInfo.set(`${name}: ${entry ? entry.short_effect : 'Sin detalle'}`);
      },
      error: () => this.abilityInfo.set('Error al cargar habilidad.')
    });
  }

  verDebilidades(typeName: string): void {
    this.pokeapi.getType(typeName).subscribe({
      next: (data) => {
        const weak = data.damage_relations.double_damage_from.map((t: any) => t.name);
        this.weaknesses.set(weak);
      },
      error: () => this.weaknesses.set([])
    });
  }

  agregarAlEquipo(): void {
    const p = this.pokemon();
    if (!p || this.team().length >= 6) return;
    if (!this.team().some((item) => item.id === p.id)) {
      this.team.set([...this.team(), p]);
    }
  }

  quitarDelEquipo(id: number): void {
    this.team.set(this.team().filter((item) => item.id !== id));
  }
}