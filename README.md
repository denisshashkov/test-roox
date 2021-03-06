# https://denisshashkov.github.io/test-roox/
## Необходимо сверстать предложенный макет, и написать простое SPA на React 16, используя следующие инструменты, технологии и подходы:

## Данные пользователей [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

### - Компонентное использование CSS
### - Реализовать SPA с использованием TypeScript
### - Препроцессор scss
### - Переиспользование блоков
### - Разделение кода на React-компоненты (презентационные и компоненты-контейнеры)
### - Webpack
    
### Попробуйте написать модульный, изолированный, повторно-используемый код

### **Задание на вёрстку выглядит следующим образом:
    
###  Необходимо сверстать две страницы “Список пользователей” и “Профиль пользователя”
    
##    Список пользователей:
    
###  1. Вывести 10 пользователей соответственно макету. Данные взять  с [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
###  2. Пока идет загрузка списка пользователей должен быть индикатор загрузки( дизайн любой на усмотрение исполнителя )
###  3. Вывести на карточку: 
    
    ### name
        
    ### address.city
        
   ###  company.name
        
   ###  4. Кнопка “Подробнее” должна вести на “Профиль пользователя”
   ###  5. Реализовать фильтрацию списка по признаку Name и City в алфавитном порядке
    
    ## Профиль пользователя:
    
   ### 1. Вывести в профиле:
        
      ###  name
        
      ###  username
        
      ###  email
        
      ###  address.street
        
      ###  address.city
        
      ###  address.zipcode
        
      ###  phone
        
      ###  website
        
   ### 2. Все поля формы, кроме Comment, должны быть предзаполнены из [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
   ### 3. Реализовать кнопку изменить, изначально поля должны быть readonly, после нажатия на кнопку поля можно редактировать
   ### 4. Реализовать валидацию на клиенте
   ### 5. Все поля формы, кроме поля Comment, обязательны для заполнения
   ### 6. Из данных формы при отправке нужно сформировать JSON и вывести его в консоль.
