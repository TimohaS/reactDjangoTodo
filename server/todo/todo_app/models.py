from django.db import models

# Create your models here.


class Author(models.Model):
    first_name = models.CharField(verbose_name="Имя", max_length=20)
    last_name = models.CharField(verbose_name="Фамилия", max_length=30)
    position = models.CharField(verbose_name="Должность", max_length=20)

    @property
    def record_count(self):
        return Record.objects.filter(author=self.id).count()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "Автор"
        verbose_name_plural = "Авторы"


class Tag(models.Model):
    title = models.CharField(verbose_name="Название тэга", max_length=100)
    data_created = models.DateTimeField(verbose_name="Дата создания тэга", auto_now_add=True, null=True, blank=True)
    is_active = models.BooleanField(default=True, verbose_name="Тэг используется")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Тег записи"
        verbose_name_plural = "Теги записи"


class Record(models.Model):
    title = models.CharField(verbose_name="Заголовок", max_length=100)
    description = models.CharField(verbose_name="Описание", max_length=1000)
    data_created = models.DateTimeField(verbose_name="Время создания", auto_now_add=True)
    due_date = models.DateField(verbose_name="Время дедлайна", auto_now_add=True)
    author = models.ForeignKey(Author, null=False, blank=True, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, verbose_name="Тэги")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Запись"
        verbose_name_plural = "Записи"



