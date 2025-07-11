import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNodeGenericComponent } from './tree-node/tree-node-generic.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, TreeNodeGenericComponent], 
  styleUrl: './app.component.scss'
})

export class AppComponent {
  treeLabels = ['Первое дерево', 'Второе дерево', 'Третье дерево', 'Четвёртое дерево'];// ну и тд, можно сделать NumberToTextPipe, но в условиях тз стоял запрет на сторонние либы
  treeNodes = [
  {
    "id": 1,
    "title": "Значение 1",
    "is_deleted": false,
    "children": [
      {
        "id": 2,
        "title": "Значение 1.1",
        "is_deleted": false,
        "children": [
          {
            "id": 3,
            "title": "Значение 1.1.1",
            "is_deleted": true,
            "children": []
          }
        ]
      },
      {
        "id": 4,
        "title": "Значение 1.2",
        "is_deleted": false,
        "children": [
          {
            "id": 5,
            "title": "Значение 1.2.1",
            "is_deleted": false,
            "children": []
          },
          {
            "id": 6,
            "title": "Значение 1.2.2",
            "is_deleted": false,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Значение 2",
    "is_deleted": false,
    "children": [
      {
        "id": 8,
        "title": "Значение 2.1",
        "is_deleted": true,
        "children": [
          {
            "id": 9,
            "title": "Значение 2.1.1",
            "is_deleted": true,
            "children": [
              {
                "id": 10,
                "title": "Значение 2.1.1.1",
                "is_deleted": true,
                "children": [
                  {
                    "id": 11,
                    "title": "Значение 2.1.1.1.1",
                    "is_deleted": true,
                    "children": [
                      {
                        "id": 12,
                        "title": "Значение 2.1.1.1.1.1",
                        "is_deleted": false,
                        "deleted_at": null,
                        "children": [
                          {
                            "id": 13,
                            "title": "Значение 2.1.1.1.1.1.1",
                            "is_deleted": false,
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": 13,
                        "title": "Значение 2.1.1.1.1.2",
                        "is_deleted": false,
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
]
  onNodeToggled(id: number): void {
    console.log('Раскрыт узел ID:', id);
  }
  title = 'testcase';
}
