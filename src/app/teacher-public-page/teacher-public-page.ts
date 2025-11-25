import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

interface SocialLink {
  type: 'facebook' | 'linkedin' | 'google-scholar' | 'scopus' | 'orcid' | 'personal';
  label: string;
  url: string;
}

interface Course {
  code: string;
  name: string;
  level: string;
  semester: string;
}

interface Publication {
  title: string;
  journal: string;
  year: number;
  doi?: string;
  scopusLink?: string;
}

@Component({
  standalone: true,
  selector: 'app-teacher-profile',
  templateUrl: './teacher-public-page.html',
  styleUrls: ['./teacher-public-page.css'],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    AvatarModule,
    ChipModule,
    ButtonModule,
    RatingModule,
    TableModule,
    DividerModule,
    TagModule
  ]
})
export class TeacherProfileComponent {

fullName = 'Проф. Вадим Єрмолаєв';

position = 'Професор семантичних технологій, керівник PhD програми «Інтелектуальні системи»';
department = 'Кафедра комп’ютерних наук та інформаційних технологій';
university = 'Український католицький університет, Факультет прикладних наук';

academicTitle = 'Вчене звання: доцент';
degree = 'науковий ступінь: кандидат фізикоматематичних наук';

averageRating = 4.8;
ratingCount = 42;

currentYear = new Date().getFullYear();

socialLinks: SocialLink[] = [
  { type: 'orcid', label: 'ORCID', url: 'https://orcid.org/0000-0002-5159-254X' },
  { type: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/vadim-ermolayev/' },
  { type: 'google-scholar', label: 'Google Scholar', url: 'https://scholar.google.com/citations?hl=en&user=vaOHuLQAAAAJ' },
  { type: 'personal', label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Vadim-Ermolayev/' },
  { type: 'personal', label: 'DBLP', url: 'https://dblp.org/pid/90/6206.html' },
  { type: 'scopus', label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=13104107100' },
  { type: 'personal', label: 'Semantic Scholar', url: 'https://www.semanticscholar.org/author/V.-Ermolayev/144063236' },
  { type: 'personal', label: 'Personal website', url: 'https://ermolayev.com/' }
];


researchInterests: string[] = [
  'здобуття та інженерія знань',
  'семантичні технології',
  'графи знань',
  'інтелектуальні програмні системи',
  'розподілений штучний інтелект',
  'динаміка та еволюція інтелектуальних артефактів'
];


courses: Course[] = [
  {
    code: 'CS-DBIS',
    name: 'Бази даних та інформаційні системи',
    level: 'бакалавр',
    semester: '3–4 семестр'
  },
  {
    code: 'CS-ADS',
    name: 'Алгоритми та структури даних',
    level: 'бакалавр',
    semester: '2–3 семестр'
  },
  {
    code: 'CS-LP-AI',
    name: 'Логічне програмування та штучний інтелект',
    level: 'бакалавр / магістр',
    semester: '5–6 семестр'
  },
  {
    code: 'CS-SP',
    name: 'Системне програмування',
    level: 'бакалавр',
    semester: '3–4 семестр'
  },
  {
    code: 'PR-INTERN',
    name: 'Керівництво виробничою практикою (ЗНУ)',
    level: 'бакалавр',
    semester: 'практика'
  }
];


publications: Publication[] = [
  {
    title: 'Semantic Technologies for Intelligent Information Systems',
    journal: 'International Journal of Semantic Computing',
    year: 2018,
    doi: '',
    scopusLink: ''
  },
  {
    title: 'Knowledge Graphs in Evolving Information Spaces',
    journal: 'Lecture Notes in Computer Science',
    year: 2019,
    doi: '',
    scopusLink: ''
  },
  {
    title: 'Distributed Artificial Intelligence for Smart Environments',
    journal: 'Journal of Intelligent & Fuzzy Systems',
    year: 2020,
    doi: '',
    scopusLink: ''
  },
  {
    title: 'Engineering Ontologies for Dynamic Domains',
    journal: 'Expert Systems with Applications',
    year: 2021,
    doi: '',
    scopusLink: ''
  },
  {
    title: 'Evolution of Knowledge in Intelligent Artifacts',
    journal: 'AI Communications',
    year: 2022,
    doi: '',
    scopusLink: ''
  }
];

  getIconClass(link: SocialLink): string {
    switch (link.type) {
      case 'facebook': return 'pi pi-facebook';
      case 'linkedin': return 'pi pi-linkedin';
      case 'google-scholar': return 'pi pi-google';
      case 'scopus': return 'pi pi-book';
      case 'orcid': return 'pi pi-id-card';
      case 'personal': return 'pi pi-globe';
      default: return 'pi pi-link';
    }
  }

  getRatingSeverity(): 'success' | 'info' | 'warning' | 'danger' {
    if (this.averageRating >= 4.5) return 'success';
    if (this.averageRating >= 4.0) return 'info';
    if (this.averageRating >= 3.0) return 'warning';
    return 'danger';
  }

  openLink(link: SocialLink): void {
    window.open(link.url, '_blank');
  }
}
