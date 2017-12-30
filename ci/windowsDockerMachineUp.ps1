$machineName = "links-spring-docker-machine"

$dockerMachines = docker-machine ls 
if ($dockerMachines -Like "*$machineName*") {
	echo "Starting docker machine..."
	docker-machine start $machineName
	docker-machine env $machineName
	&docker-machine env $machineName | Invoke-Expression
	echo "Docker machine started."
} else {
	echo "Creating docker machine..."
	docker-machine create --driver virtualbox --virtualbox-disk-size "20000" --virtualbox-memory "8192" --virtualbox-cpu-count "4" $machineName
	docker-machine start $machineName
	docker-machine env $machineName
	&docker-machine env $machineName | Invoke-Expression
	echo "Docker machine created."

	echo "Fixing incorrect network adapter type..."
	docker-machine stop $machineName
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" modifyvm $machineName --nictype1 Am79C973
	docker-machine start $machineName
	echo "Network adapter type fixed."

	echo "Setting ports forwarding on Oracle VirtualBox machine..."
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "Postgres,tcp,,5432,,5432"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "eureka,tcp,,8761,,8761"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "eureka-jmx,tcp,,18761,,18761"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "eureka-debug,tcp,,28761,,28761"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "application,tcp,,8001,,8001"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "application-jmx,tcp,,18001,,18001"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "application-debug,tcp,,28001,,28001"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "menu-and-content,tcp,,8002,,8002"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "menu-and-content-jmx,tcp,,18002,,18002"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "menu-and-content-debug,tcp,,28002,,28002"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "about,tcp,,8003,,8003"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "about-jmx,tcp,,18003,,18003"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "about-debug,tcp,,28003,,28003"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "links,tcp,,8011,,8011"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "links-jmx,tcp,,18011,,18011"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "links-debug,tcp,,28011,,28011"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "urls,tcp,,8012,,8012"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "urls-jmx,tcp,,18012,,18012"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "urls-debug,tcp,,28012,,28012"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "descriptions,tcp,,8013,,8013"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "descriptions-jmx,tcp,,18013,,18013"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "descriptions-debug,tcp,,28013,,28013"

	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "keywords,tcp,,8014,,8014"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "keywords-jmx,tcp,,18014,,18014"
	&"C:\Program Files\Oracle\VirtualBox\VBoxManage" controlvm "$machineName" natpf1 "keywords-debug,tcp,,28014,,28014"

	echo "Setting ports forwarding finished."
	echo ""
}