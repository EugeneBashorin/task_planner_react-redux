//хранения констант (например значений фильтра статуса)
export const statusFilters = Object.freeze({
    all:"all",
    active: "active",
    completed: "completed",
})
//метод Object.freeze() - «замораживает» объект значений фильтра, предотвратить случайное его изменение по ссылке в местах импорта.