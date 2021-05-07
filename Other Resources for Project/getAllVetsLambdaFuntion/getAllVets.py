import pymysql

username='admin'	
password='*******'
database_name='vets-database'
endpoint='*******'
#connection here reuses connection for each lambda connection
pymysql.connect(host=endpoint, user=username,
	passwd=password, db=database_name)

def get_vets():
    cursor=connection.cursor(event, context)
    cursor.execute('SELECT vets.first_name, vets.last_name, specialties.name AS spec FROM vet_specialties INNER JOIN vets ON vets.id = vet_specialties.vet_id INNER JOIN specialties ON specialties.id = vet_specialties.specialty_id')

    rows=cursor.fetchall()

    for row in rows:
        print(row)


get_vets()
        