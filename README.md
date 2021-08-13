# SuperHero Hunter
Learn about your favourite Marvel characters , Super heroes and villains! Discover their powers , weaknesses , abilities & more

## 🔗 Links
[Hosted Link](https://gursimratrai.github.io/SuperHero-Hunter/)

## Screenshots
#### Home
![App Screenshot](https://drive.google.com//uc?export=view&id=1bEF65c6iyafezb9zFL8WdgNtHtZeiZwr)
#### Favourites
![App Screenshot](https://drive.google.com//uc?export=view&id=1bEVx1ACkMlAwJGBibMFRcAh8yqiDirT9)
#### Superhero Page
![App Screenshot](https://drive.google.com//uc?export=view&id=1bGORmQU0E0ZGxdHBbsitX-i00FY0Bgs3)

## API Reference

#### Base Url

```http
  GET https://www.superheroapi.com/api.php/{api_key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api.php/${api_key}
```

| Reference | Method     | Purpose                       |
| :-------- | :------- | :-------------------------------- |
| `/id`      | `GET` | Search by character id. Returns all information of the character.|
| `/id/powerstats`      | `GET` | Returns JSON Array of all powerstats of given character.|
| `/id/biography`      | `GET` | Returns JSON Array of character's biography.|
| `/id/appearance`      | `GET` | Returns JSON Array of character's appearance.|
| `/id/work`      | `GET` | Returns JSON Array of character's work i.e. occupation and operation base.|
| `/id/connections`      | `GET` | GET	Returns JSON Array of character's connections.|
| `/id/image`      | `GET` | Returns image url of the character.|
| `/name`      | `GET` | Search character by name. Returns character id.|

  
## Features

- Search for any superhero
- Click on the superhero name will open a new tab contains more detail about the superhero.
- Add superhero to the favourites list
- Remove superhero from the favourites list
- Favourites list is persistent (same number of superheroes before and after closing the browser)

  
