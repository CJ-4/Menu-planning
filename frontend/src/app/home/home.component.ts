import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Meal } from '../home/meal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mealForm = new FormGroup({
    foodName: new FormControl('', [Validators.required])
  })

  food: Meal[];

  submit() {
    console.log(this.mealForm.value);
    this.submitMeal(this.mealForm.value);
  }


  ngOnInit() {
    const draggables = document.querySelectorAll('.draggable')
    const containers = document.querySelectorAll('.container')

    loadMeals()
    console.log("Food array:" + this.food);

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
      })

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
      })
    })

    containers.forEach(container => {
      container.addEventListener('dragover', (event: MouseEvent) => {
        event.preventDefault()
        const afterElement = getDragAfterElement(container, event.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
          container.appendChild(draggable)
        } else {
          container.insertBefore(draggable, afterElement)
        }
      })
    })

    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element
    }
  }

  submitMeal(foodName) {
    fetch('http://127.0.0.1:3000/meal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodName),
    })
      .then(response => {
        if (response.status == 200) {
          console.log("Food Saved");
        } else {
          //TODO handle errors
        }
      });
  }



  //Closes ngoninit  
}

function loadMeals() {
  fetch('http://127.0.0.1:3000/meal', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => {
    if (response.status == 200) {
      return this.food = response.json();
    } else {
      //TODO handle errors
    }
  })
}