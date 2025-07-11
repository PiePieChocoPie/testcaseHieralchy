import { Component, Input, TemplateRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from './tree-node.model';

@Component({
    selector: 'app-tree-node-generic',
    standalone: true,
    templateUrl: './tree-node-generic.component.html',
    imports: [CommonModule]
})
export class TreeNodeGenericComponent {
  @Input({ required: true }) node!: TreeNode;
  @Input() level = 0;
  @Input({ required: true }) contentTemplate!: TemplateRef<any>;
  @Input() logToggle: boolean = false;

  expanded = signal(false);

  toggle() {
    this.expanded.set(!this.expanded());

    if (this.logToggle && this.expanded()) {
      console.log('Раскрыт узел ID:', this.node.id);
    }
  }
  trackById(index: number, item: TreeNode): number {
  return item.id;
}


  hasChildren() {
    return this.node.children?.length;
  }
}
