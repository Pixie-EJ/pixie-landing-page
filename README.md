<img src="https://i.imgur.com/bjCwde7.png" width="180px" height="180px" alt="PIXIE">

# Pixie-Landing-Page

## Função
É uma Landing Page que comporta as informações de contato com a Pixie e informa ao público os serviços a EJ

## Organização do repositório
Para todos os projetos da Pixie será utilizado uma organização de branches no git:

#### --> master
   É onde será salvo o código finalizado, só existe uma e não pode enviar commits diretamente para esta branch

#### --> development
   Será o branch onde features e fixes serão enviadas por meio de pull requests depois de resolvido os conflitos, só existe uma e não pode enviar commits diretamente para esta branch

#### --> fix/branch-name
   Branch destinada a resolver bugs no código, podem existir várias, quando finalizado o bugfix, precisa criar uma pull request para "development". O nome das branches são escritos em inglês

#### --> feature/branch-name
   Branch destinada a adicionar novas funções ou modificações no código, podem existir várias, quando finalizado a feature, precisa criar uma pull request para "development". O nome das branches são escritos em inglês

## Organização da workfolder

Primeiro é necessário clonar o repositório para sua workfolder

   ```sh
   git clone https://github.com/Pixie-EJ/pixie-landing-page (nome da pasta)
   ```

Após isso basta apenas abrir o bash do git, ou o terminal do linux na pasta criada e selecionar o branch de desenvolvimento

   * Esse comando lista todos os branches disponíveis

      ```sh
      git branch -a
      ```
   
   <img src="https://i.imgur.com/1M2DyjR.png" width="" height="" alt="PIXIE">
   
   * Utilizamos o checkout para selecionar o branch development (desenvolvimento)

      ```sh
      git checkout development
      ```
   
Feito isso, é necessário criar um branch separado para cada modificação que será feita, pois é necessário aprovação para enviar códigos para o development

   * O branch é criado e selecionado desta maneira

       ```sh
       git branch (nome do branch, ex: fix/sidebar-text)
       ```
      
   * Logo após selecionamos o branch criado com:
   
       ```sh
       git checkout (nome do branch, ex: fix/sidebar-text)
       ```
 
 Pronto! seu repositório local está preparado e organizado
 
 ## Atualizando o repositório local
 
 Normalmente quando uma task é completada e o merge/rebase é feito com o development, o seu branch development local ficará desatualizado em relação ao principal, para resolver isso é necessário atualizar seu repositório local com alguns comandos
 
   ```sh
   git checkout development
   ```
   
   ```sh
   git pull
   ```
   
Evite fazer branches sem atualizar o development local, pois atualizar evita o risco de conflitos na hora de realizar um pull-request.

## Enviando alterações

Para enviar as alterações é recomendavel explicar o que foi feito nelas quando se faz um commit, utilize este template para as alterações, sendo o corpo do commit opcional:

   ```sh
   (tipo do commit): "descrição"
   ```
   
Também é possível incluir o nome do arquivo junto do template separados por uma barra (opcional):
   
   ```sh
   (tipo do commit /nome do arquivo): "descrição"
   ```

Após tudo pronto, pode enviar seu novo branch com as alterações utilizando o push

   ```sh
   git push
   ```
   
É comum o git pedir para você definir a upstream, simplemente digite o comando que o git mostrar na tela, no nosso caso será este:

   ```sh
   git push --set-upstream origin (nome do branch criado)
   ```
   
Pronto! código enviado!
