pipeline
{
    agent any
    stages
    {
        stage("Checkout")
        {
            steps
            {
                git branch:"main", url:"https://github.com/ShrutiSharma2005/Jenkins.git"
            }
        }
        stage("Build")
        {
            steps
            {
              sh "mvn clean package"  
            }
        }
       stage ("Test") 
       {
           steps{
               sh "mvn test"
           }
       }
    }
}


ssh-keygen -t ed25519 -C
sudo cat var/ggg
 git remote set-url origin git@github.com:ShrutiSharma2005/c2.git
 git config --global user.email "shrutisharma.liwingindia@gmail.com"
