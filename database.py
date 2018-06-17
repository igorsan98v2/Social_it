import sqlite3

conn = sqlite3.connect("db.sqlite3")

data = [(1,8,48.743361,37.592736,'Пересечение улиц \"Дружбы\" и \"Василия Стуса\"'),
(1,8,48.742480,37.595195,'Пересечение улиц \"Дружбы и \"Героев Украины\"'),
(1,8,48.732257,37.583526,'Пересечение улиц \"Василия Стуса\" и \"Парковая\"'),
(1,8,48.727610,37.595957,'Пересечение улиц \"Юбилейная\" и \"Парковая\"'),
(1,8,48.725130,37.537895,'Пересечение улиц \"Школьная\" и \"Сиверская\"'),
(4,2,48.721722,37.600327,'Аптека \"Вита-Фарм\"'),
(4,2,48.748568,37.620375,'Территориальный комитет № 4'),
(4,3,48.768129,37.551450,'Ясногорский поссовет'),
(3,2,48.762711,37.603539,'ЧП \"Старостенко\"'),
(3,1,48.748833,37.617221,'Аптека № 8 ООО \"Фармация\"'),
(3,2,48.742360,37.601996,'Лечебно-профилактический центр "Альянс"'),
(3,2,48.743302,37.591570,'Ветеринарная лечебница \"Айболит\"'),
(3,3,48.759123,37.618061,'Беленьковский городской совет'),
(2,1,48.731274,37.607604,'Аптека № 169 \"Добрі ліки\"'),
(2,1,48.735187,37.586298,'Аптека № 4 ДКП \"Фармация\"'),
(2,2,48.741511,37.584401,'Медицинский центр \"Доверие\"'),
(2,3,48.734970,37.576933,'Офис управления \"ЖКХ\"'),
(2,3,48.733816,37.592971,'Офис территориального комитета'),
(1,4,48.737510,37.591076,'Магазин \"Продукты\"'),
(1,4,48.738411,37.592404,'Магазин \"Спортландия\"'),
(1,4,48.733293,37.583956,'Магазин \"Collins\"'),
(1,4,48.733068,37.584560,'Магазин \"Лучано\"'),
(1,4,48.733760,37.584257,'Магазин \"Промтовары\"'),
(1,4,48.736788,37.586697,'\"Магазин бытовой техники\"'),
(1,4,48.737047,37.588204,'Магазин \"Всё в ажуре\"'),
(1,4,48.740160,37.590399,'Магазин обуви \"Avenus\"'),
(1,4,48.748854,37.597962,'Магазин \"Крокус\" (цветы)'),
(1,4,48.737437,37.580212,'Магазин \"Продукты\"'),
(1,4,48.737860,37.581078,'Магазин \"Продукты\"'),
(1,4,48.738014,37.579737,'Магазин \"Продукты\"'),
(1,5,48.750126,37.609971,'Закусочная \"Аппетит\"'),
(1,7,48.7249665,37.6016544,'Ломбард \"Капитал\"'),
(1,7,48.749808,37.61605,'Ломбард\"Сосед\"'),
(1,6,48.7531301,37.6097051,'Парикмахерская \"Династия\"'),
(1,6,48.7396601,37.590472,'Салон красоты \"Гламур\"'),
(1,6,48.7251747,37.5322,'Парикмахерская \"Эсфирь\"'),
(1,6,48.7473833,37.596841,'Парикмахерская \"Монро\"')]

for item in data:
    conn.execute('INSERT INTO places (place_id,category_id,lat,lang,name) VALUES (?, ?, ?, ?, ?)', (item[0], item[1], item[2], item[3], item[4]))

conn.commit()

conn.close()