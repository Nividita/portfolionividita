import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: false,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

  skills=[
    {name:'Angular',img:'https://th.bing.com/th/id/OIP.Ca8m7_pPKZlmP5bgC7UfCgHaH0?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {name:'Html',img:'https://th.bing.com/th?id=OIP.r5zfe55aiprSSBP_ecn39QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'},
    {name:'Css',img:'https://th.bing.com/th/id/OIP.fuuo-UQGaeRzL9wDDAlZIwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {name:'Javascript',img:'https://th.bing.com/th/id/OIP.yOH1mL7-SXE3AruSanjeswHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {name:'Typescript',img:'https://th.bing.com/th/id/OIP.YcSXQxZ7_8tBEBQu8RyS-wHaFj?rs=1&pid=ImgDetMain'},
    {name:'C#.Net',img:'https://th.bing.com/th/id/OIP.79cbBVCjQdgrpMSnvfKC4AHaHa?rs=1&pid=ImgDetMain'},
    {name:'Asp.net',img:'https://th.bing.com/th/id/OIP.7rFmOf6LQt4_ySbW5qHiSwHaEl?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {name:'Dot Net Core',img:'https://cdn.pellerex.com/public/ecosystem/web/content/api-set-up/asp-net-core-web-api-setup.png'},
    {name:'SqlServer',img:'https://th.bing.com/th/id/OIP.vmJyit9iM6-RQDbT0OoDaQHaFj?w=263&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {
      name:'GitHub',img:'https://torrentfreak.com/images/github-logo-dark.jpg'
    },
    {
      name:'Git',img:'https://th.bing.com/th/id/OIP.Cyy550uNqDu2o49p5KAGwgHaCm?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
      name:'Bootstrap',img:'https://jharaphula.com/wp-content/uploads/2022/06/bootstrap-social.png'
    }
 

  ];
}
